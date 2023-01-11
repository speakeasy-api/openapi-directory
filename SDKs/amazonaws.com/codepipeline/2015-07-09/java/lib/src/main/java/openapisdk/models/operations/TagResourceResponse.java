package openapisdk.models.operations;



public class TagResourceResponse {
    public Object concurrentModificationException;
    public TagResourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public TagResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTagsException;
    public TagResourceResponse withInvalidTagsException(Object invalidTagsException) {
        this.invalidTagsException = invalidTagsException;
        return this;
    }
    public Object resourceNotFoundException;
    public TagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagResourceOutput;
    public TagResourceResponse withTagResourceOutput(java.util.Map<String, Object> tagResourceOutput) {
        this.tagResourceOutput = tagResourceOutput;
        return this;
    }
    public Object tooManyTagsException;
    public TagResourceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object validationException;
    public TagResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}