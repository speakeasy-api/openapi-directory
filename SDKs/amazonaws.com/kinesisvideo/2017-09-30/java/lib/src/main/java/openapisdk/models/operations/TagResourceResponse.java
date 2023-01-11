package openapisdk.models.operations;



public class TagResourceResponse {
    public Object accessDeniedException;
    public TagResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public TagResourceResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public TagResourceResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
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
    public Object tagsPerResourceExceededLimitException;
    public TagResourceResponse withTagsPerResourceExceededLimitException(Object tagsPerResourceExceededLimitException) {
        this.tagsPerResourceExceededLimitException = tagsPerResourceExceededLimitException;
        return this;
    }
}