package openapisdk.models.operations;



public class UpdateProtectionGroupResponse {
    public String contentType;
    public UpdateProtectionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateProtectionGroupResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateProtectionGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public UpdateProtectionGroupResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProtectionGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProtectionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateProtectionGroupResponse;
    public UpdateProtectionGroupResponse withUpdateProtectionGroupResponse(java.util.Map<String, Object> updateProtectionGroupResponse) {
        this.updateProtectionGroupResponse = updateProtectionGroupResponse;
        return this;
    }
}