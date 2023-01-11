package openapisdk.models.operations;



public class DeprovisionByoipCidrResponse {
    public Object accessDeniedException;
    public DeprovisionByoipCidrResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object byoipCidrNotFoundException;
    public DeprovisionByoipCidrResponse withByoipCidrNotFoundException(Object byoipCidrNotFoundException) {
        this.byoipCidrNotFoundException = byoipCidrNotFoundException;
        return this;
    }
    public String contentType;
    public DeprovisionByoipCidrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeprovisionByoipCidrResponse deprovisionByoipCidrResponse;
    public DeprovisionByoipCidrResponse withDeprovisionByoipCidrResponse(openapisdk.models.shared.DeprovisionByoipCidrResponse deprovisionByoipCidrResponse) {
        this.deprovisionByoipCidrResponse = deprovisionByoipCidrResponse;
        return this;
    }
    public Object incorrectCidrStateException;
    public DeprovisionByoipCidrResponse withIncorrectCidrStateException(Object incorrectCidrStateException) {
        this.incorrectCidrStateException = incorrectCidrStateException;
        return this;
    }
    public Object internalServiceErrorException;
    public DeprovisionByoipCidrResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeprovisionByoipCidrResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DeprovisionByoipCidrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}