package openapisdk.models.operations;



public class DeleteProtectionGroupResponse {
    public String contentType;
    public DeleteProtectionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProtectionGroupResponse;
    public DeleteProtectionGroupResponse withDeleteProtectionGroupResponse(java.util.Map<String, Object> deleteProtectionGroupResponse) {
        this.deleteProtectionGroupResponse = deleteProtectionGroupResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteProtectionGroupResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object optimisticLockException;
    public DeleteProtectionGroupResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProtectionGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProtectionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}