package openapisdk.models.operations;



public class PrivateInstitutionAccountGroupRoleDeleteResponse {
    public String contentType;
    public PrivateInstitutionAccountGroupRoleDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateInstitutionAccountGroupRoleDeleteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateInstitutionAccountGroupRoleDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}