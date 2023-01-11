package openapisdk.models.operations;



public class CreateProtectionGroupResponse {
    public String contentType;
    public CreateProtectionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createProtectionGroupResponse;
    public CreateProtectionGroupResponse withCreateProtectionGroupResponse(java.util.Map<String, Object> createProtectionGroupResponse) {
        this.createProtectionGroupResponse = createProtectionGroupResponse;
        return this;
    }
    public Object internalErrorException;
    public CreateProtectionGroupResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateProtectionGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitsExceededException;
    public CreateProtectionGroupResponse withLimitsExceededException(Object limitsExceededException) {
        this.limitsExceededException = limitsExceededException;
        return this;
    }
    public Object optimisticLockException;
    public CreateProtectionGroupResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateProtectionGroupResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateProtectionGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateProtectionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}