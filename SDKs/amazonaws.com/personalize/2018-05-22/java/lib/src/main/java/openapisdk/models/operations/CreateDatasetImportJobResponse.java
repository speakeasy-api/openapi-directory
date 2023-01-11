package openapisdk.models.operations;



public class CreateDatasetImportJobResponse {
    public String contentType;
    public CreateDatasetImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatasetImportJobResponse createDatasetImportJobResponse;
    public CreateDatasetImportJobResponse withCreateDatasetImportJobResponse(openapisdk.models.shared.CreateDatasetImportJobResponse createDatasetImportJobResponse) {
        this.createDatasetImportJobResponse = createDatasetImportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateDatasetImportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateDatasetImportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDatasetImportJobResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateDatasetImportJobResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDatasetImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDatasetImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}