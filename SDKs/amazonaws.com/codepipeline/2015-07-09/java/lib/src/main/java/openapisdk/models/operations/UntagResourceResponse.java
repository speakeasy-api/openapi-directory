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
    public Object invalidArnException;
    public UntagResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTagsException;
    public UntagResourceResponse withInvalidTagsException(Object invalidTagsException) {
        this.invalidTagsException = invalidTagsException;
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
    public java.util.Map<String, Object> untagResourceOutput;
    public UntagResourceResponse withUntagResourceOutput(java.util.Map<String, Object> untagResourceOutput) {
        this.untagResourceOutput = untagResourceOutput;
        return this;
    }
    public Object validationException;
    public UntagResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}