package openapisdk.models.operations;



public class UpdateLifecyclePolicyResponse {
    public String contentType;
    public UpdateLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateLifecyclePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateLifecyclePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateLifecyclePolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLifecyclePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateLifecyclePolicyResponse;
    public UpdateLifecyclePolicyResponse withUpdateLifecyclePolicyResponse(java.util.Map<String, Object> updateLifecyclePolicyResponse) {
        this.updateLifecyclePolicyResponse = updateLifecyclePolicyResponse;
        return this;
    }
}