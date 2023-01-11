package openapisdk.models.operations;



public class DisassociateDrtLogBucketResponse {
    public Object accessDeniedForDependencyException;
    public DisassociateDrtLogBucketResponse withAccessDeniedForDependencyException(Object accessDeniedForDependencyException) {
        this.accessDeniedForDependencyException = accessDeniedForDependencyException;
        return this;
    }
    public String contentType;
    public DisassociateDrtLogBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateDRTLogBucketResponse;
    public DisassociateDrtLogBucketResponse withDisassociateDrtLogBucketResponse(java.util.Map<String, Object> disassociateDRTLogBucketResponse) {
        this.disassociateDRTLogBucketResponse = disassociateDRTLogBucketResponse;
        return this;
    }
    public Object internalErrorException;
    public DisassociateDrtLogBucketResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public DisassociateDrtLogBucketResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object noAssociatedRoleException;
    public DisassociateDrtLogBucketResponse withNoAssociatedRoleException(Object noAssociatedRoleException) {
        this.noAssociatedRoleException = noAssociatedRoleException;
        return this;
    }
    public Object optimisticLockException;
    public DisassociateDrtLogBucketResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateDrtLogBucketResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateDrtLogBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}