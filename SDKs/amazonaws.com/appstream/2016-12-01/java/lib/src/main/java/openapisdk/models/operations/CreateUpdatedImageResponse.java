package openapisdk.models.operations;



public class CreateUpdatedImageResponse {
    public Object concurrentModificationException;
    public CreateUpdatedImageResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateUpdatedImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUpdatedImageResult createUpdatedImageResult;
    public CreateUpdatedImageResponse withCreateUpdatedImageResult(openapisdk.models.shared.CreateUpdatedImageResult createUpdatedImageResult) {
        this.createUpdatedImageResult = createUpdatedImageResult;
        return this;
    }
    public Object incompatibleImageException;
    public CreateUpdatedImageResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public CreateUpdatedImageResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object limitExceededException;
    public CreateUpdatedImageResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateUpdatedImageResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateUpdatedImageResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateUpdatedImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateUpdatedImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}