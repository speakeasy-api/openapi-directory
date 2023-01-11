package openapisdk.models.operations;



public class DescribeForecastExportJobResponse {
    public String contentType;
    public DescribeForecastExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeForecastExportJobResponse describeForecastExportJobResponse;
    public DescribeForecastExportJobResponse withDescribeForecastExportJobResponse(openapisdk.models.shared.DescribeForecastExportJobResponse describeForecastExportJobResponse) {
        this.describeForecastExportJobResponse = describeForecastExportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeForecastExportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeForecastExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeForecastExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}