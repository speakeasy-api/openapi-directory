package openapisdk.models.operations;



public class UpdateDataRetentionResponse {
    public Object clientLimitExceededException;
    public UpdateDataRetentionResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public UpdateDataRetentionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateDataRetentionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateDataRetentionResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateDataRetentionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDataRetentionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDataRetentionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDataRetentionOutput;
    public UpdateDataRetentionResponse withUpdateDataRetentionOutput(java.util.Map<String, Object> updateDataRetentionOutput) {
        this.updateDataRetentionOutput = updateDataRetentionOutput;
        return this;
    }
    public Object versionMismatchException;
    public UpdateDataRetentionResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}