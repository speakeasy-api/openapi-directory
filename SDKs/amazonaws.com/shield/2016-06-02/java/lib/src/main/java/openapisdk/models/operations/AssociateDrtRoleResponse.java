package openapisdk.models.operations;



public class AssociateDrtRoleResponse {
    public Object accessDeniedForDependencyException;
    public AssociateDrtRoleResponse withAccessDeniedForDependencyException(Object accessDeniedForDependencyException) {
        this.accessDeniedForDependencyException = accessDeniedForDependencyException;
        return this;
    }
    public java.util.Map<String, Object> associateDRTRoleResponse;
    public AssociateDrtRoleResponse withAssociateDrtRoleResponse(java.util.Map<String, Object> associateDRTRoleResponse) {
        this.associateDRTRoleResponse = associateDRTRoleResponse;
        return this;
    }
    public String contentType;
    public AssociateDrtRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AssociateDrtRoleResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public AssociateDrtRoleResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateDrtRoleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public AssociateDrtRoleResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateDrtRoleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateDrtRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}