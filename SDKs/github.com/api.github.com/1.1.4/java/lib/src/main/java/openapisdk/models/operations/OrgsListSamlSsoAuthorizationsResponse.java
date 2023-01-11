package openapisdk.models.operations;



public class OrgsListSamlSsoAuthorizationsResponse {
    public String contentType;
    public OrgsListSamlSsoAuthorizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsListSamlSsoAuthorizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CredentialAuthorization[] credentialAuthorizations;
    public OrgsListSamlSsoAuthorizationsResponse withCredentialAuthorizations(openapisdk.models.shared.CredentialAuthorization[] credentialAuthorizations) {
        this.credentialAuthorizations = credentialAuthorizations;
        return this;
    }
}