package openapisdk.models.operations;



public class GetNamespaceDeletionStatusResponse {
    public String contentType;
    public GetNamespaceDeletionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNamespaceDeletionStatusResponse getNamespaceDeletionStatusResponse;
    public GetNamespaceDeletionStatusResponse withGetNamespaceDeletionStatusResponse(openapisdk.models.shared.GetNamespaceDeletionStatusResponse getNamespaceDeletionStatusResponse) {
        this.getNamespaceDeletionStatusResponse = getNamespaceDeletionStatusResponse;
        return this;
    }
    public Object internalFailureException;
    public GetNamespaceDeletionStatusResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetNamespaceDeletionStatusResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetNamespaceDeletionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetNamespaceDeletionStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}