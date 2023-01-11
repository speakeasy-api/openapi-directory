package openapisdk.models.operations;



public class OauthAuthorizationsCheckAuthorizationResponse {
    public String contentType;
    public OauthAuthorizationsCheckAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsCheckAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthorizationWithUser authorizationWithUser;
    public OauthAuthorizationsCheckAuthorizationResponse withAuthorizationWithUser(openapisdk.models.shared.AuthorizationWithUser authorizationWithUser) {
        this.authorizationWithUser = authorizationWithUser;
        return this;
    }
}