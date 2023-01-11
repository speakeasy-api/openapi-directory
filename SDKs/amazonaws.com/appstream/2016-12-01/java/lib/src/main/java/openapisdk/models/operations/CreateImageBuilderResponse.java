package openapisdk.models.operations;



public class CreateImageBuilderResponse {
    public Object concurrentModificationException;
    public CreateImageBuilderResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateImageBuilderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateImageBuilderResult createImageBuilderResult;
    public CreateImageBuilderResponse withCreateImageBuilderResult(openapisdk.models.shared.CreateImageBuilderResult createImageBuilderResult) {
        this.createImageBuilderResult = createImageBuilderResult;
        return this;
    }
    public Object incompatibleImageException;
    public CreateImageBuilderResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public CreateImageBuilderResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateImageBuilderResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRoleException;
    public CreateImageBuilderResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public CreateImageBuilderResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateImageBuilderResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object requestLimitExceededException;
    public CreateImageBuilderResponse withRequestLimitExceededException(Object requestLimitExceededException) {
        this.requestLimitExceededException = requestLimitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateImageBuilderResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotAvailableException;
    public CreateImageBuilderResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateImageBuilderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateImageBuilderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}