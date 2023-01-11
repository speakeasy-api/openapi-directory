package openapisdk.models.operations;



public class OauthAuthorizationsDeleteGrantResponse {
    public String contentType;
    public OauthAuthorizationsDeleteGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsDeleteGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsDeleteGrantResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}