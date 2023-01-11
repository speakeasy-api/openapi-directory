package openapisdk.models.operations;



public class TagProjectResponse {
    public Object concurrentModificationException;
    public TagProjectResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public TagProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public TagProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object projectNotFoundException;
    public TagProjectResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public TagProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagProjectResult tagProjectResult;
    public TagProjectResponse withTagProjectResult(openapisdk.models.shared.TagProjectResult tagProjectResult) {
        this.tagProjectResult = tagProjectResult;
        return this;
    }
    public Object validationException;
    public TagProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}