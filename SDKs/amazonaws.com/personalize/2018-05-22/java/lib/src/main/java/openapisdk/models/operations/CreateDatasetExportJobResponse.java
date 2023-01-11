package openapisdk.models.operations;



public class CreateDatasetExportJobResponse {
    public String contentType;
    public CreateDatasetExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatasetExportJobResponse createDatasetExportJobResponse;
    public CreateDatasetExportJobResponse withCreateDatasetExportJobResponse(openapisdk.models.shared.CreateDatasetExportJobResponse createDatasetExportJobResponse) {
        this.createDatasetExportJobResponse = createDatasetExportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateDatasetExportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateDatasetExportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDatasetExportJobResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateDatasetExportJobResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDatasetExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDatasetExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}