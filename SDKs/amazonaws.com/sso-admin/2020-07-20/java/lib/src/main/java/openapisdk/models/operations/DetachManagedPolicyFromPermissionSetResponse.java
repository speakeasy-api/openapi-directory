package openapisdk.models.operations;



public class DetachManagedPolicyFromPermissionSetResponse {
    public Object accessDeniedException;
    public DetachManagedPolicyFromPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DetachManagedPolicyFromPermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DetachManagedPolicyFromPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> detachManagedPolicyFromPermissionSetResponse;
    public DetachManagedPolicyFromPermissionSetResponse withDetachManagedPolicyFromPermissionSetResponse(java.util.Map<String, Object> detachManagedPolicyFromPermissionSetResponse) {
        this.detachManagedPolicyFromPermissionSetResponse = detachManagedPolicyFromPermissionSetResponse;
        return this;
    }
    public Object internalServerException;
    public DetachManagedPolicyFromPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachManagedPolicyFromPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DetachManagedPolicyFromPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetachManagedPolicyFromPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DetachManagedPolicyFromPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}