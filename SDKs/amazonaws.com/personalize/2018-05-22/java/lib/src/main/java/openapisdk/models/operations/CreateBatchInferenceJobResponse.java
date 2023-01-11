package openapisdk.models.operations;



public class CreateBatchInferenceJobResponse {
    public String contentType;
    public CreateBatchInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBatchInferenceJobResponse createBatchInferenceJobResponse;
    public CreateBatchInferenceJobResponse withCreateBatchInferenceJobResponse(openapisdk.models.shared.CreateBatchInferenceJobResponse createBatchInferenceJobResponse) {
        this.createBatchInferenceJobResponse = createBatchInferenceJobResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateBatchInferenceJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateBatchInferenceJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateBatchInferenceJobResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateBatchInferenceJobResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateBatchInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBatchInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}