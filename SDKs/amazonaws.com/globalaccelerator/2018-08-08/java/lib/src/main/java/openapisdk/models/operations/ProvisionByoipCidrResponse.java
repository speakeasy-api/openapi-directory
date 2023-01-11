package openapisdk.models.operations;



public class ProvisionByoipCidrResponse {
    public Object accessDeniedException;
    public ProvisionByoipCidrResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ProvisionByoipCidrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incorrectCidrStateException;
    public ProvisionByoipCidrResponse withIncorrectCidrStateException(Object incorrectCidrStateException) {
        this.incorrectCidrStateException = incorrectCidrStateException;
        return this;
    }
    public Object internalServiceErrorException;
    public ProvisionByoipCidrResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ProvisionByoipCidrResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public ProvisionByoipCidrResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ProvisionByoipCidrResponse provisionByoipCidrResponse;
    public ProvisionByoipCidrResponse withProvisionByoipCidrResponse(openapisdk.models.shared.ProvisionByoipCidrResponse provisionByoipCidrResponse) {
        this.provisionByoipCidrResponse = provisionByoipCidrResponse;
        return this;
    }
    public Long statusCode;
    public ProvisionByoipCidrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}