package openapisdk.models.operations;



public class ProvisionPermissionSetResponse {
    public Object accessDeniedException;
    public ProvisionPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ProvisionPermissionSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ProvisionPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ProvisionPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ProvisionPermissionSetResponse provisionPermissionSetResponse;
    public ProvisionPermissionSetResponse withProvisionPermissionSetResponse(openapisdk.models.shared.ProvisionPermissionSetResponse provisionPermissionSetResponse) {
        this.provisionPermissionSetResponse = provisionPermissionSetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ProvisionPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ProvisionPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ProvisionPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ProvisionPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}