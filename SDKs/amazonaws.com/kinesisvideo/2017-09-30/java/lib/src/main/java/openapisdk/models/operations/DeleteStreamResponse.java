package openapisdk.models.operations;



public class DeleteStreamResponse {
    public Object clientLimitExceededException;
    public DeleteStreamResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public DeleteStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteStreamOutput;
    public DeleteStreamResponse withDeleteStreamOutput(java.util.Map<String, Object> deleteStreamOutput) {
        this.deleteStreamOutput = deleteStreamOutput;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteStreamResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public DeleteStreamResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteStreamResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object versionMismatchException;
    public DeleteStreamResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}