package openapisdk.models.operations;



public class GetSystemInstanceResponse {
    public String contentType;
    public GetSystemInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSystemInstanceResponse getSystemInstanceResponse;
    public GetSystemInstanceResponse withGetSystemInstanceResponse(openapisdk.models.shared.GetSystemInstanceResponse getSystemInstanceResponse) {
        this.getSystemInstanceResponse = getSystemInstanceResponse;
        return this;
    }
    public Object internalFailureException;
    public GetSystemInstanceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetSystemInstanceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSystemInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSystemInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetSystemInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}