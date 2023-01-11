package openapisdk.models.operations;



public class CreateConnectionResponse {
    public String contentType;
    public CreateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectionResponse createConnectionResponse;
    public CreateConnectionResponse withCreateConnectionResponse(openapisdk.models.shared.CreateConnectionResponse createConnectionResponse) {
        this.createConnectionResponse = createConnectionResponse;
        return this;
    }
    public Object internalException;
    public CreateConnectionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object limitExceededException;
    public CreateConnectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateConnectionResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}