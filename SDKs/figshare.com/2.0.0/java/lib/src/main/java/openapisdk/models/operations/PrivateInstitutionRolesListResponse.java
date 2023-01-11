package openapisdk.models.operations;



public class PrivateInstitutionRolesListResponse {
    public String contentType;
    public PrivateInstitutionRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionRolesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.Role[] roles;
    public PrivateInstitutionRolesListResponse withRoles(openapisdk.models.shared.Role[] roles) {
        this.roles = roles;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}