package openapisdk.models.operations;



public class DescribePredictorBacktestExportJobResponse {
    public String contentType;
    public DescribePredictorBacktestExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePredictorBacktestExportJobResponse describePredictorBacktestExportJobResponse;
    public DescribePredictorBacktestExportJobResponse withDescribePredictorBacktestExportJobResponse(openapisdk.models.shared.DescribePredictorBacktestExportJobResponse describePredictorBacktestExportJobResponse) {
        this.describePredictorBacktestExportJobResponse = describePredictorBacktestExportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribePredictorBacktestExportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePredictorBacktestExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePredictorBacktestExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}