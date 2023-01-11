package openapisdk.models.operations;



public class CreatePredictorResponse {
    public String contentType;
    public CreatePredictorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePredictorResponse createPredictorResponse;
    public CreatePredictorResponse withCreatePredictorResponse(openapisdk.models.shared.CreatePredictorResponse createPredictorResponse) {
        this.createPredictorResponse = createPredictorResponse;
        return this;
    }
    public Object invalidInputException;
    public CreatePredictorResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreatePredictorResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreatePredictorResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreatePredictorResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePredictorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePredictorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}