package openapisdk.models.operations;



public class AdvertiseByoipCidrResponse {
    public Object accessDeniedException;
    public AdvertiseByoipCidrResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AdvertiseByoipCidrResponse advertiseByoipCidrResponse;
    public AdvertiseByoipCidrResponse withAdvertiseByoipCidrResponse(openapisdk.models.shared.AdvertiseByoipCidrResponse advertiseByoipCidrResponse) {
        this.advertiseByoipCidrResponse = advertiseByoipCidrResponse;
        return this;
    }
    public Object byoipCidrNotFoundException;
    public AdvertiseByoipCidrResponse withByoipCidrNotFoundException(Object byoipCidrNotFoundException) {
        this.byoipCidrNotFoundException = byoipCidrNotFoundException;
        return this;
    }
    public String contentType;
    public AdvertiseByoipCidrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incorrectCidrStateException;
    public AdvertiseByoipCidrResponse withIncorrectCidrStateException(Object incorrectCidrStateException) {
        this.incorrectCidrStateException = incorrectCidrStateException;
        return this;
    }
    public Object internalServiceErrorException;
    public AdvertiseByoipCidrResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public AdvertiseByoipCidrResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public AdvertiseByoipCidrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}