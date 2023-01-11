package openapisdk.models.operations;



public class UpdateBatchPredictionResponse {
    public String contentType;
    public UpdateBatchPredictionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateBatchPredictionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public UpdateBatchPredictionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateBatchPredictionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBatchPredictionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateBatchPredictionOutput updateBatchPredictionOutput;
    public UpdateBatchPredictionResponse withUpdateBatchPredictionOutput(openapisdk.models.shared.UpdateBatchPredictionOutput updateBatchPredictionOutput) {
        this.updateBatchPredictionOutput = updateBatchPredictionOutput;
        return this;
    }
}