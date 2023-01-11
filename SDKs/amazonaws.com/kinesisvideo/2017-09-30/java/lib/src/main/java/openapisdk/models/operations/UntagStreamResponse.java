package openapisdk.models.operations;



public class UntagStreamResponse {
    public Object clientLimitExceededException;
    public UntagStreamResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public UntagStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UntagStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidResourceFormatException;
    public UntagStreamResponse withInvalidResourceFormatException(Object invalidResourceFormatException) {
        this.invalidResourceFormatException = invalidResourceFormatException;
        return this;
    }
    public Object notAuthorizedException;
    public UntagStreamResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UntagStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UntagStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagStreamOutput;
    public UntagStreamResponse withUntagStreamOutput(java.util.Map<String, Object> untagStreamOutput) {
        this.untagStreamOutput = untagStreamOutput;
        return this;
    }
}