package openapisdk.models.operations;



public class CreateTableResponse {
    public String contentType;
    public CreateTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTableOutput createTableOutput;
    public CreateTableResponse withCreateTableOutput(openapisdk.models.shared.CreateTableOutput createTableOutput) {
        this.createTableOutput = createTableOutput;
        return this;
    }
    public Object internalServerError;
    public CreateTableResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public CreateTableResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public CreateTableResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public CreateTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}