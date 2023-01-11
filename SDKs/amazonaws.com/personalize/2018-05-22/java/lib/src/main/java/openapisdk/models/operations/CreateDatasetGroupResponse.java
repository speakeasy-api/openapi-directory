package openapisdk.models.operations;



public class CreateDatasetGroupResponse {
    public String contentType;
    public CreateDatasetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatasetGroupResponse createDatasetGroupResponse;
    public CreateDatasetGroupResponse withCreateDatasetGroupResponse(openapisdk.models.shared.CreateDatasetGroupResponse createDatasetGroupResponse) {
        this.createDatasetGroupResponse = createDatasetGroupResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateDatasetGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateDatasetGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDatasetGroupResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateDatasetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}