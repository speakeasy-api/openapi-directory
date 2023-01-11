package openapisdk.models.operations;



public class DeleteBatchPredictionResponse {
    public String contentType;
    public DeleteBatchPredictionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBatchPredictionOutput deleteBatchPredictionOutput;
    public DeleteBatchPredictionResponse withDeleteBatchPredictionOutput(openapisdk.models.shared.DeleteBatchPredictionOutput deleteBatchPredictionOutput) {
        this.deleteBatchPredictionOutput = deleteBatchPredictionOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteBatchPredictionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DeleteBatchPredictionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteBatchPredictionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBatchPredictionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}