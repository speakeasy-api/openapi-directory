package openapisdk.models.operations;



public class PutInlinePolicyToPermissionSetResponse {
    public Object accessDeniedException;
    public PutInlinePolicyToPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutInlinePolicyToPermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutInlinePolicyToPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutInlinePolicyToPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> putInlinePolicyToPermissionSetResponse;
    public PutInlinePolicyToPermissionSetResponse withPutInlinePolicyToPermissionSetResponse(java.util.Map<String, Object> putInlinePolicyToPermissionSetResponse) {
        this.putInlinePolicyToPermissionSetResponse = putInlinePolicyToPermissionSetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutInlinePolicyToPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public PutInlinePolicyToPermissionSetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public PutInlinePolicyToPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutInlinePolicyToPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutInlinePolicyToPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}