package openapisdk.models.operations;



public class QueryForecastResponse {
    public String contentType;
    public QueryForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public QueryForecastResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public QueryForecastResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public QueryForecastResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.QueryForecastResponse queryForecastResponse;
    public QueryForecastResponse withQueryForecastResponse(openapisdk.models.shared.QueryForecastResponse queryForecastResponse) {
        this.queryForecastResponse = queryForecastResponse;
        return this;
    }
    public Object resourceInUseException;
    public QueryForecastResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public QueryForecastResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public QueryForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}