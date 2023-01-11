package openapisdk.models.operations;



public class GetBatchPredictionResponse {
    public String contentType;
    public GetBatchPredictionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBatchPredictionOutput getBatchPredictionOutput;
    public GetBatchPredictionResponse withGetBatchPredictionOutput(openapisdk.models.shared.GetBatchPredictionOutput getBatchPredictionOutput) {
        this.getBatchPredictionOutput = getBatchPredictionOutput;
        return this;
    }
    public Object internalServerException;
    public GetBatchPredictionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public GetBatchPredictionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetBatchPredictionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetBatchPredictionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}