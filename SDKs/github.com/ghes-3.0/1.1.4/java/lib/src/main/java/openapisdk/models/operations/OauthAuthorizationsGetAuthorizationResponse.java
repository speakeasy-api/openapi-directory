package openapisdk.models.operations;



public class OauthAuthorizationsGetAuthorizationResponse {
    public String contentType;
    public OauthAuthorizationsGetAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsGetAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public OauthAuthorizationsGetAuthorizationResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsGetAuthorizationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}