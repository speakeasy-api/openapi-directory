package openapisdk.models.operations;



public class CreateFilterResponse {
    public String contentType;
    public CreateFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFilterResponse createFilterResponse;
    public CreateFilterResponse withCreateFilterResponse(openapisdk.models.shared.CreateFilterResponse createFilterResponse) {
        this.createFilterResponse = createFilterResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateFilterResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateFilterResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateFilterResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}