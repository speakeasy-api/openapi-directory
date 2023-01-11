package openapisdk.models.operations;



public class OauthAuthorizationsResetAuthorizationResponse {
    public String contentType;
    public OauthAuthorizationsResetAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsResetAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthorizationWithUser authorizationWithUser;
    public OauthAuthorizationsResetAuthorizationResponse withAuthorizationWithUser(openapisdk.models.shared.AuthorizationWithUser authorizationWithUser) {
        this.authorizationWithUser = authorizationWithUser;
        return this;
    }
}