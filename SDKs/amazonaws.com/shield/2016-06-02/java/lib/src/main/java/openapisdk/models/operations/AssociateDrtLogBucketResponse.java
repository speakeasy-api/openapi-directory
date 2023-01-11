package openapisdk.models.operations;



public class AssociateDrtLogBucketResponse {
    public Object accessDeniedForDependencyException;
    public AssociateDrtLogBucketResponse withAccessDeniedForDependencyException(Object accessDeniedForDependencyException) {
        this.accessDeniedForDependencyException = accessDeniedForDependencyException;
        return this;
    }
    public java.util.Map<String, Object> associateDRTLogBucketResponse;
    public AssociateDrtLogBucketResponse withAssociateDrtLogBucketResponse(java.util.Map<String, Object> associateDRTLogBucketResponse) {
        this.associateDRTLogBucketResponse = associateDRTLogBucketResponse;
        return this;
    }
    public String contentType;
    public AssociateDrtLogBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AssociateDrtLogBucketResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public AssociateDrtLogBucketResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateDrtLogBucketResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitsExceededException;
    public AssociateDrtLogBucketResponse withLimitsExceededException(Object limitsExceededException) {
        this.limitsExceededException = limitsExceededException;
        return this;
    }
    public Object noAssociatedRoleException;
    public AssociateDrtLogBucketResponse withNoAssociatedRoleException(Object noAssociatedRoleException) {
        this.noAssociatedRoleException = noAssociatedRoleException;
        return this;
    }
    public Object optimisticLockException;
    public AssociateDrtLogBucketResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateDrtLogBucketResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateDrtLogBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}