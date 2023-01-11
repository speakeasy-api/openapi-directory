package openapisdk.models.operations;



public class CreatePermissionSetResponse {
    public Object accessDeniedException;
    public CreatePermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreatePermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreatePermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePermissionSetResponse createPermissionSetResponse;
    public CreatePermissionSetResponse withCreatePermissionSetResponse(openapisdk.models.shared.CreatePermissionSetResponse createPermissionSetResponse) {
        this.createPermissionSetResponse = createPermissionSetResponse;
        return this;
    }
    public Object internalServerException;
    public CreatePermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreatePermissionSetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreatePermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreatePermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreatePermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}