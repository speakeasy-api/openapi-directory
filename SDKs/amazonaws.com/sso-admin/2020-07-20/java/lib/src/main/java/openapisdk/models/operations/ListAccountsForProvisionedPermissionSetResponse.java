package openapisdk.models.operations;



public class ListAccountsForProvisionedPermissionSetResponse {
    public Object accessDeniedException;
    public ListAccountsForProvisionedPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAccountsForProvisionedPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccountsForProvisionedPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccountsForProvisionedPermissionSetResponse listAccountsForProvisionedPermissionSetResponse;
    public ListAccountsForProvisionedPermissionSetResponse withListAccountsForProvisionedPermissionSetResponse(openapisdk.models.shared.ListAccountsForProvisionedPermissionSetResponse listAccountsForProvisionedPermissionSetResponse) {
        this.listAccountsForProvisionedPermissionSetResponse = listAccountsForProvisionedPermissionSetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccountsForProvisionedPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccountsForProvisionedPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccountsForProvisionedPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAccountsForProvisionedPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}