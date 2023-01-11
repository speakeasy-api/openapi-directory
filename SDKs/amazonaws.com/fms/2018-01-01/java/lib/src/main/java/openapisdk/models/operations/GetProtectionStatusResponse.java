package openapisdk.models.operations;



public class GetProtectionStatusResponse {
    public String contentType;
    public GetProtectionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProtectionStatusResponse getProtectionStatusResponse;
    public GetProtectionStatusResponse withGetProtectionStatusResponse(openapisdk.models.shared.GetProtectionStatusResponse getProtectionStatusResponse) {
        this.getProtectionStatusResponse = getProtectionStatusResponse;
        return this;
    }
    public Object internalErrorException;
    public GetProtectionStatusResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public GetProtectionStatusResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProtectionStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetProtectionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}