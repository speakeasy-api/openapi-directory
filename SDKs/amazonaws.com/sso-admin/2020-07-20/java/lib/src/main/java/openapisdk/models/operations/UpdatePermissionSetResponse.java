package openapisdk.models.operations;



public class UpdatePermissionSetResponse {
    public Object accessDeniedException;
    public UpdatePermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdatePermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdatePermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdatePermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdatePermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updatePermissionSetResponse;
    public UpdatePermissionSetResponse withUpdatePermissionSetResponse(java.util.Map<String, Object> updatePermissionSetResponse) {
        this.updatePermissionSetResponse = updatePermissionSetResponse;
        return this;
    }
    public Object validationException;
    public UpdatePermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}