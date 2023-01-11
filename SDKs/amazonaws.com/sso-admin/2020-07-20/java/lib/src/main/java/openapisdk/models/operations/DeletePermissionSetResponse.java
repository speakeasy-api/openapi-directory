package openapisdk.models.operations;



public class DeletePermissionSetResponse {
    public Object accessDeniedException;
    public DeletePermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeletePermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeletePermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePermissionSetResponse;
    public DeletePermissionSetResponse withDeletePermissionSetResponse(java.util.Map<String, Object> deletePermissionSetResponse) {
        this.deletePermissionSetResponse = deletePermissionSetResponse;
        return this;
    }
    public Object internalServerException;
    public DeletePermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeletePermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeletePermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}