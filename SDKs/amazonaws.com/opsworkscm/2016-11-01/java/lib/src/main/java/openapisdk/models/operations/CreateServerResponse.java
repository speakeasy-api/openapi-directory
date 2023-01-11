package openapisdk.models.operations;



public class CreateServerResponse {
    public String contentType;
    public CreateServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateServerResponse createServerResponse;
    public CreateServerResponse withCreateServerResponse(openapisdk.models.shared.CreateServerResponse createServerResponse) {
        this.createServerResponse = createServerResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateServerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateServerResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateServerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}