package openapisdk.models.operations;



public class CreateBlueprintResponse {
    public Object alreadyExistsException;
    public CreateBlueprintResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateBlueprintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBlueprintResponse createBlueprintResponse;
    public CreateBlueprintResponse withCreateBlueprintResponse(openapisdk.models.shared.CreateBlueprintResponse createBlueprintResponse) {
        this.createBlueprintResponse = createBlueprintResponse;
        return this;
    }
    public Object internalServiceException;
    public CreateBlueprintResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateBlueprintResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateBlueprintResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateBlueprintResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateBlueprintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}