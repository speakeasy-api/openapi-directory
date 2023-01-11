package openapisdk.models.operations;



public class DescribeForecastResponse {
    public String contentType;
    public DescribeForecastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeForecastResponse describeForecastResponse;
    public DescribeForecastResponse withDescribeForecastResponse(openapisdk.models.shared.DescribeForecastResponse describeForecastResponse) {
        this.describeForecastResponse = describeForecastResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeForecastResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeForecastResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeForecastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}