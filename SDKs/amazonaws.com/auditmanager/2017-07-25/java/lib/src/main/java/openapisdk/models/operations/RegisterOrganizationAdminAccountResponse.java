package openapisdk.models.operations;



public class RegisterOrganizationAdminAccountResponse {
    public Object accessDeniedException;
    public RegisterOrganizationAdminAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RegisterOrganizationAdminAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RegisterOrganizationAdminAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.RegisterOrganizationAdminAccountResponse registerOrganizationAdminAccountResponse;
    public RegisterOrganizationAdminAccountResponse withRegisterOrganizationAdminAccountResponse(openapisdk.models.shared.RegisterOrganizationAdminAccountResponse registerOrganizationAdminAccountResponse) {
        this.registerOrganizationAdminAccountResponse = registerOrganizationAdminAccountResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterOrganizationAdminAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterOrganizationAdminAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}