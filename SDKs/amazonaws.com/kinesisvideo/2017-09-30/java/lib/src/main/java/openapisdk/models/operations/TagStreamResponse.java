package openapisdk.models.operations;



public class TagStreamResponse {
    public Object clientLimitExceededException;
    public TagStreamResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public TagStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public TagStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidResourceFormatException;
    public TagStreamResponse withInvalidResourceFormatException(Object invalidResourceFormatException) {
        this.invalidResourceFormatException = invalidResourceFormatException;
        return this;
    }
    public Object notAuthorizedException;
    public TagStreamResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public TagStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public TagStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagStreamOutput;
    public TagStreamResponse withTagStreamOutput(java.util.Map<String, Object> tagStreamOutput) {
        this.tagStreamOutput = tagStreamOutput;
        return this;
    }
    public Object tagsPerResourceExceededLimitException;
    public TagStreamResponse withTagsPerResourceExceededLimitException(Object tagsPerResourceExceededLimitException) {
        this.tagsPerResourceExceededLimitException = tagsPerResourceExceededLimitException;
        return this;
    }
}