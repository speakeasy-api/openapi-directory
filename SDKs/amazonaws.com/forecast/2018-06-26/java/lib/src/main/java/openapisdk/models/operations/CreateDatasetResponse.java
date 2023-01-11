package openapisdk.models.operations;



public class CreateDatasetResponse {
    public String contentType;
    public CreateDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatasetResponse createDatasetResponse;
    public CreateDatasetResponse withCreateDatasetResponse(openapisdk.models.shared.CreateDatasetResponse createDatasetResponse) {
        this.createDatasetResponse = createDatasetResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateDatasetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateDatasetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDatasetResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}