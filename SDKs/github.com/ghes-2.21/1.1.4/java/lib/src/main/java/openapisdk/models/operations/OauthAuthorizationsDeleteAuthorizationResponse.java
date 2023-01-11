package openapisdk.models.operations;



public class OauthAuthorizationsDeleteAuthorizationResponse {
    public String contentType;
    public OauthAuthorizationsDeleteAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsDeleteAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsDeleteAuthorizationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}