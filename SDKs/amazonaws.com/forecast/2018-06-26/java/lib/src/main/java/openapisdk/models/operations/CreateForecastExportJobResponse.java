package openapisdk.models.operations;



public class CreateForecastExportJobResponse {
    public String contentType;
    public CreateForecastExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateForecastExportJobResponse createForecastExportJobResponse;
    public CreateForecastExportJobResponse withCreateForecastExportJobResponse(openapisdk.models.shared.CreateForecastExportJobResponse createForecastExportJobResponse) {
        this.createForecastExportJobResponse = createForecastExportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateForecastExportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateForecastExportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateForecastExportJobResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateForecastExportJobResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateForecastExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateForecastExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}