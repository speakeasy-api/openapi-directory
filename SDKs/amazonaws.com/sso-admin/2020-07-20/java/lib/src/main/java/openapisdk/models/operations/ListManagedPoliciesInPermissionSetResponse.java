package openapisdk.models.operations;



public class ListManagedPoliciesInPermissionSetResponse {
    public Object accessDeniedException;
    public ListManagedPoliciesInPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListManagedPoliciesInPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListManagedPoliciesInPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListManagedPoliciesInPermissionSetResponse listManagedPoliciesInPermissionSetResponse;
    public ListManagedPoliciesInPermissionSetResponse withListManagedPoliciesInPermissionSetResponse(openapisdk.models.shared.ListManagedPoliciesInPermissionSetResponse listManagedPoliciesInPermissionSetResponse) {
        this.listManagedPoliciesInPermissionSetResponse = listManagedPoliciesInPermissionSetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListManagedPoliciesInPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListManagedPoliciesInPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListManagedPoliciesInPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListManagedPoliciesInPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}