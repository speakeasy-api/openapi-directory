package openapisdk.models.operations;



public class UpdateTableResponse {
    public String contentType;
    public UpdateTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateTableResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public UpdateTableResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateTableResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateTableOutput updateTableOutput;
    public UpdateTableResponse withUpdateTableOutput(openapisdk.models.shared.UpdateTableOutput updateTableOutput) {
        this.updateTableOutput = updateTableOutput;
        return this;
    }
}