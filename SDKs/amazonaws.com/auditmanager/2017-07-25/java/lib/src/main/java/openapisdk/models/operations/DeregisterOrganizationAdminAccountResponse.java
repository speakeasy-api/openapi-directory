package openapisdk.models.operations;



public class DeregisterOrganizationAdminAccountResponse {
    public Object accessDeniedException;
    public DeregisterOrganizationAdminAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeregisterOrganizationAdminAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterOrganizationAdminAccountResponse;
    public DeregisterOrganizationAdminAccountResponse withDeregisterOrganizationAdminAccountResponse(java.util.Map<String, Object> deregisterOrganizationAdminAccountResponse) {
        this.deregisterOrganizationAdminAccountResponse = deregisterOrganizationAdminAccountResponse;
        return this;
    }
    public Object internalServerException;
    public DeregisterOrganizationAdminAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterOrganizationAdminAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterOrganizationAdminAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}