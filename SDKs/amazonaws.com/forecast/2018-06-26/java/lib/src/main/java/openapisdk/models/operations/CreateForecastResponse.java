package openapisdk.models.operations;



public class CreateForecastResponse {
    public String contentType;
    public CreateForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateForecastResponse createForecastResponse;
    public CreateForecastResponse withCreateForecastResponse(openapisdk.models.shared.CreateForecastResponse createForecastResponse) {
        this.createForecastResponse = createForecastResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateForecastResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateForecastResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateForecastResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateForecastResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateForecastResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}