package openapisdk.models.operations;



public class PrivateInstitutionAccountGroupRolesResponse {
    public java.util.Map<String, Object> accountGroupRoles;
    public PrivateInstitutionAccountGroupRolesResponse withAccountGroupRoles(java.util.Map<String, Object> accountGroupRoles) {
        this.accountGroupRoles = accountGroupRoles;
        return this;
    }
    public String contentType;
    public PrivateInstitutionAccountGroupRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionAccountGroupRolesResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionAccountGroupRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}