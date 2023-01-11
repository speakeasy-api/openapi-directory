package openapisdk.models.operations;



public class UntagProjectResponse {
    public Object concurrentModificationException;
    public UntagProjectResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UntagProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UntagProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object projectNotFoundException;
    public UntagProjectResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public UntagProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagProjectResult;
    public UntagProjectResponse withUntagProjectResult(java.util.Map<String, Object> untagProjectResult) {
        this.untagProjectResult = untagProjectResult;
        return this;
    }
    public Object validationException;
    public UntagProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}