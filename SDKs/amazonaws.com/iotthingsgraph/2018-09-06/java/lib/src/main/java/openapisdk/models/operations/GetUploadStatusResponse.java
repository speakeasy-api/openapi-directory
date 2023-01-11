package openapisdk.models.operations;



public class GetUploadStatusResponse {
    public String contentType;
    public GetUploadStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUploadStatusResponse getUploadStatusResponse;
    public GetUploadStatusResponse withGetUploadStatusResponse(openapisdk.models.shared.GetUploadStatusResponse getUploadStatusResponse) {
        this.getUploadStatusResponse = getUploadStatusResponse;
        return this;
    }
    public Object internalFailureException;
    public GetUploadStatusResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetUploadStatusResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetUploadStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetUploadStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetUploadStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}