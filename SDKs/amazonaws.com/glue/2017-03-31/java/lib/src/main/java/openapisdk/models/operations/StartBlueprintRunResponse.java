package openapisdk.models.operations;



public class StartBlueprintRunResponse {
    public String contentType;
    public StartBlueprintRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartBlueprintRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object illegalBlueprintStateException;
    public StartBlueprintRunResponse withIllegalBlueprintStateException(Object illegalBlueprintStateException) {
        this.illegalBlueprintStateException = illegalBlueprintStateException;
        return this;
    }
    public Object internalServiceException;
    public StartBlueprintRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartBlueprintRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartBlueprintRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public StartBlueprintRunResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartBlueprintRunResponse startBlueprintRunResponse;
    public StartBlueprintRunResponse withStartBlueprintRunResponse(openapisdk.models.shared.StartBlueprintRunResponse startBlueprintRunResponse) {
        this.startBlueprintRunResponse = startBlueprintRunResponse;
        return this;
    }
    public Long statusCode;
    public StartBlueprintRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}