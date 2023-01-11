package openapisdk.models.operations;



public class CreateFleetResponse {
    public Object concurrentModificationException;
    public CreateFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFleetResult createFleetResult;
    public CreateFleetResponse withCreateFleetResult(openapisdk.models.shared.CreateFleetResult createFleetResult) {
        this.createFleetResult = createFleetResult;
        return this;
    }
    public Object incompatibleImageException;
    public CreateFleetResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public CreateFleetResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateFleetResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRoleException;
    public CreateFleetResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public CreateFleetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateFleetResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object requestLimitExceededException;
    public CreateFleetResponse withRequestLimitExceededException(Object requestLimitExceededException) {
        this.requestLimitExceededException = requestLimitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateFleetResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotAvailableException;
    public CreateFleetResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}