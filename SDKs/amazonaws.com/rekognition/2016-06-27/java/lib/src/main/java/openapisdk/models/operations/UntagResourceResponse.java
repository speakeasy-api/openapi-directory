package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object accessDeniedException;
    public UntagResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UntagResourceResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public UntagResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public UntagResourceResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UntagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UntagResourceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> untagResourceResponse;
    public UntagResourceResponse withUntagResourceResponse(java.util.Map<String, Object> untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
}