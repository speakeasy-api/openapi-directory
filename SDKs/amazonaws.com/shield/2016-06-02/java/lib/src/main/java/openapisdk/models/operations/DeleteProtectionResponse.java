package openapisdk.models.operations;



public class DeleteProtectionResponse {
    public String contentType;
    public DeleteProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProtectionResponse;
    public DeleteProtectionResponse withDeleteProtectionResponse(java.util.Map<String, Object> deleteProtectionResponse) {
        this.deleteProtectionResponse = deleteProtectionResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteProtectionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object optimisticLockException;
    public DeleteProtectionResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}