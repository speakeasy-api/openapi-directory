package openapisdk.models.operations;



public class DescribeBatchPredictionsResponse {
    public String contentType;
    public DescribeBatchPredictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBatchPredictionsOutput describeBatchPredictionsOutput;
    public DescribeBatchPredictionsResponse withDescribeBatchPredictionsOutput(openapisdk.models.shared.DescribeBatchPredictionsOutput describeBatchPredictionsOutput) {
        this.describeBatchPredictionsOutput = describeBatchPredictionsOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeBatchPredictionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DescribeBatchPredictionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeBatchPredictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}