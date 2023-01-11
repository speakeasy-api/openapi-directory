package openapisdk.models.operations;



public class CreateBatchPredictionResponse {
    public String contentType;
    public CreateBatchPredictionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBatchPredictionOutput createBatchPredictionOutput;
    public CreateBatchPredictionResponse withCreateBatchPredictionOutput(openapisdk.models.shared.CreateBatchPredictionOutput createBatchPredictionOutput) {
        this.createBatchPredictionOutput = createBatchPredictionOutput;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateBatchPredictionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateBatchPredictionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateBatchPredictionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CreateBatchPredictionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}