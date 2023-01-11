package openapisdk.models.operations;



public class DeleteLifecyclePolicyResponse {
    public String contentType;
    public DeleteLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLifecyclePolicyResponse;
    public DeleteLifecyclePolicyResponse withDeleteLifecyclePolicyResponse(java.util.Map<String, Object> deleteLifecyclePolicyResponse) {
        this.deleteLifecyclePolicyResponse = deleteLifecyclePolicyResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteLifecyclePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object limitExceededException;
    public DeleteLifecyclePolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLifecyclePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}