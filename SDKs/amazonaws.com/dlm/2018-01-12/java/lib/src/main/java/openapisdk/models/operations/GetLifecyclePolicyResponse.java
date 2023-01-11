package openapisdk.models.operations;



public class GetLifecyclePolicyResponse {
    public String contentType;
    public GetLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLifecyclePolicyResponse getLifecyclePolicyResponse;
    public GetLifecyclePolicyResponse withGetLifecyclePolicyResponse(openapisdk.models.shared.GetLifecyclePolicyResponse getLifecyclePolicyResponse) {
        this.getLifecyclePolicyResponse = getLifecyclePolicyResponse;
        return this;
    }
    public Object internalServerException;
    public GetLifecyclePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object limitExceededException;
    public GetLifecyclePolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLifecyclePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}