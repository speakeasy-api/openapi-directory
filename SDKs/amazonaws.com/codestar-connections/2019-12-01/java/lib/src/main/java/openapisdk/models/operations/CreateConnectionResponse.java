package openapisdk.models.operations;



public class CreateConnectionResponse {
    public String contentType;
    public CreateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectionOutput createConnectionOutput;
    public CreateConnectionResponse withCreateConnectionOutput(openapisdk.models.shared.CreateConnectionOutput createConnectionOutput) {
        this.createConnectionOutput = createConnectionOutput;
        return this;
    }
    public Object limitExceededException;
    public CreateConnectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public CreateConnectionResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}