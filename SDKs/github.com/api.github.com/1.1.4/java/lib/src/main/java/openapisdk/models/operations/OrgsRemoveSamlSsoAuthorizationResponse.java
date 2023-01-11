package openapisdk.models.operations;



public class OrgsRemoveSamlSsoAuthorizationResponse {
    public String contentType;
    public OrgsRemoveSamlSsoAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsRemoveSamlSsoAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsRemoveSamlSsoAuthorizationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}