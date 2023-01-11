package openapisdk.models.operations;



public class CreateApiDestinationResponse {
    public String contentType;
    public CreateApiDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApiDestinationResponse createApiDestinationResponse;
    public CreateApiDestinationResponse withCreateApiDestinationResponse(openapisdk.models.shared.CreateApiDestinationResponse createApiDestinationResponse) {
        this.createApiDestinationResponse = createApiDestinationResponse;
        return this;
    }
    public Object internalException;
    public CreateApiDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object limitExceededException;
    public CreateApiDestinationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateApiDestinationResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateApiDestinationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApiDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}