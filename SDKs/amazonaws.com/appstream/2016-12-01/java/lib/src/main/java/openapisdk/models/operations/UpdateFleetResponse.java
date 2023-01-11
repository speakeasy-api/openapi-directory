package openapisdk.models.operations;



public class UpdateFleetResponse {
    public Object concurrentModificationException;
    public UpdateFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleImageException;
    public UpdateFleetResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public UpdateFleetResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateFleetResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRoleException;
    public UpdateFleetResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public UpdateFleetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public UpdateFleetResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object requestLimitExceededException;
    public UpdateFleetResponse withRequestLimitExceededException(Object requestLimitExceededException) {
        this.requestLimitExceededException = requestLimitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateFleetResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotAvailableException;
    public UpdateFleetResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateFleetResult updateFleetResult;
    public UpdateFleetResponse withUpdateFleetResult(openapisdk.models.shared.UpdateFleetResult updateFleetResult) {
        this.updateFleetResult = updateFleetResult;
        return this;
    }
}