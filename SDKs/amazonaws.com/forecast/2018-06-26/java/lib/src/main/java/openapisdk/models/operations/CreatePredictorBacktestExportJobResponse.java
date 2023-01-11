package openapisdk.models.operations;



public class CreatePredictorBacktestExportJobResponse {
    public String contentType;
    public CreatePredictorBacktestExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePredictorBacktestExportJobResponse createPredictorBacktestExportJobResponse;
    public CreatePredictorBacktestExportJobResponse withCreatePredictorBacktestExportJobResponse(openapisdk.models.shared.CreatePredictorBacktestExportJobResponse createPredictorBacktestExportJobResponse) {
        this.createPredictorBacktestExportJobResponse = createPredictorBacktestExportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public CreatePredictorBacktestExportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreatePredictorBacktestExportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreatePredictorBacktestExportJobResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreatePredictorBacktestExportJobResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePredictorBacktestExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePredictorBacktestExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}