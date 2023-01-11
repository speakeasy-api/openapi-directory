package openapisdk.models.operations;



public class DeleteInlinePolicyFromPermissionSetResponse {
    public Object accessDeniedException;
    public DeleteInlinePolicyFromPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteInlinePolicyFromPermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteInlinePolicyFromPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteInlinePolicyFromPermissionSetResponse;
    public DeleteInlinePolicyFromPermissionSetResponse withDeleteInlinePolicyFromPermissionSetResponse(java.util.Map<String, Object> deleteInlinePolicyFromPermissionSetResponse) {
        this.deleteInlinePolicyFromPermissionSetResponse = deleteInlinePolicyFromPermissionSetResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteInlinePolicyFromPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteInlinePolicyFromPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteInlinePolicyFromPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteInlinePolicyFromPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteInlinePolicyFromPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}