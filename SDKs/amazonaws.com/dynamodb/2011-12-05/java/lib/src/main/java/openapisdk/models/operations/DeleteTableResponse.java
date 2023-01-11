package openapisdk.models.operations;



public class DeleteTableResponse {
    public String contentType;
    public DeleteTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteTableOutput deleteTableOutput;
    public DeleteTableResponse withDeleteTableOutput(openapisdk.models.shared.DeleteTableOutput deleteTableOutput) {
        this.deleteTableOutput = deleteTableOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteTableResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public DeleteTableResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteTableResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}