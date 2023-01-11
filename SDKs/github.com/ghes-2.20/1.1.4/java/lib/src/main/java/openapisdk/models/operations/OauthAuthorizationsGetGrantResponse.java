package openapisdk.models.operations;



public class OauthAuthorizationsGetGrantResponse {
    public String contentType;
    public OauthAuthorizationsGetGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsGetGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApplicationGrant applicationGrant;
    public OauthAuthorizationsGetGrantResponse withApplicationGrant(openapisdk.models.shared.ApplicationGrant applicationGrant) {
        this.applicationGrant = applicationGrant;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsGetGrantResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}