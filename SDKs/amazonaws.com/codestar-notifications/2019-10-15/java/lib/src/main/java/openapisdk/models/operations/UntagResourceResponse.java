package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object concurrentModificationException;
    public UntagResourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
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
    public java.util.Map<String, Object> untagResourceResult;
    public UntagResourceResponse withUntagResourceResult(java.util.Map<String, Object> untagResourceResult) {
        this.untagResourceResult = untagResourceResult;
        return this;
    }
    public Object validationException;
    public UntagResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}