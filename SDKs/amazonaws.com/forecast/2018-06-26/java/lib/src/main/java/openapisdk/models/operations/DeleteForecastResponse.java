package openapisdk.models.operations;



public class DeleteForecastResponse {
    public String contentType;
    public DeleteForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public DeleteForecastResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteForecastResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteForecastResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}