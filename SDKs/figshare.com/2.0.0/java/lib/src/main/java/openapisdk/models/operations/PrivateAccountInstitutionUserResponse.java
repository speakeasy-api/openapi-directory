package openapisdk.models.operations;



public class PrivateAccountInstitutionUserResponse {
    public String contentType;
    public PrivateAccountInstitutionUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateAccountInstitutionUserResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateAccountInstitutionUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PrivateAccountInstitutionUserResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}