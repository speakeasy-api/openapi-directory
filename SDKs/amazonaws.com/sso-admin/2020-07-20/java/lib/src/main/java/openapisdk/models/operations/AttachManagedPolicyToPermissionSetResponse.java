package openapisdk.models.operations;



public class AttachManagedPolicyToPermissionSetResponse {
    public Object accessDeniedException;
    public AttachManagedPolicyToPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> attachManagedPolicyToPermissionSetResponse;
    public AttachManagedPolicyToPermissionSetResponse withAttachManagedPolicyToPermissionSetResponse(java.util.Map<String, Object> attachManagedPolicyToPermissionSetResponse) {
        this.attachManagedPolicyToPermissionSetResponse = attachManagedPolicyToPermissionSetResponse;
        return this;
    }
    public Object conflictException;
    public AttachManagedPolicyToPermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AttachManagedPolicyToPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AttachManagedPolicyToPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachManagedPolicyToPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AttachManagedPolicyToPermissionSetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AttachManagedPolicyToPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AttachManagedPolicyToPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AttachManagedPolicyToPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}