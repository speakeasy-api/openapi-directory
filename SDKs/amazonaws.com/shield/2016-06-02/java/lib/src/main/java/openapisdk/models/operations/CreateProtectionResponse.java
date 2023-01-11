package openapisdk.models.operations;



public class CreateProtectionResponse {
    public String contentType;
    public CreateProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProtectionResponse createProtectionResponse;
    public CreateProtectionResponse withCreateProtectionResponse(openapisdk.models.shared.CreateProtectionResponse createProtectionResponse) {
        this.createProtectionResponse = createProtectionResponse;
        return this;
    }
    public Object internalErrorException;
    public CreateProtectionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public CreateProtectionResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public CreateProtectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidResourceException;
    public CreateProtectionResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Object limitsExceededException;
    public CreateProtectionResponse withLimitsExceededException(Object limitsExceededException) {
        this.limitsExceededException = limitsExceededException;
        return this;
    }
    public Object optimisticLockException;
    public CreateProtectionResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateProtectionResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}