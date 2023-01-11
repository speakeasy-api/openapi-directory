package openapisdk.models.operations;



public class ListPermissionSetsProvisionedToAccountResponse {
    public Object accessDeniedException;
    public ListPermissionSetsProvisionedToAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPermissionSetsProvisionedToAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPermissionSetsProvisionedToAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPermissionSetsProvisionedToAccountResponse listPermissionSetsProvisionedToAccountResponse;
    public ListPermissionSetsProvisionedToAccountResponse withListPermissionSetsProvisionedToAccountResponse(openapisdk.models.shared.ListPermissionSetsProvisionedToAccountResponse listPermissionSetsProvisionedToAccountResponse) {
        this.listPermissionSetsProvisionedToAccountResponse = listPermissionSetsProvisionedToAccountResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPermissionSetsProvisionedToAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPermissionSetsProvisionedToAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPermissionSetsProvisionedToAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPermissionSetsProvisionedToAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}