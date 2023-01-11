package openapisdk.models.operations;



public class ListPermissionSetProvisioningStatusResponse {
    public Object accessDeniedException;
    public ListPermissionSetProvisioningStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPermissionSetProvisioningStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPermissionSetProvisioningStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPermissionSetProvisioningStatusResponse listPermissionSetProvisioningStatusResponse;
    public ListPermissionSetProvisioningStatusResponse withListPermissionSetProvisioningStatusResponse(openapisdk.models.shared.ListPermissionSetProvisioningStatusResponse listPermissionSetProvisioningStatusResponse) {
        this.listPermissionSetProvisioningStatusResponse = listPermissionSetProvisioningStatusResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPermissionSetProvisioningStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPermissionSetProvisioningStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPermissionSetProvisioningStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPermissionSetProvisioningStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}