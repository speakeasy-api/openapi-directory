package openapisdk.models.operations;



public class OauthAuthorizationsGetOrCreateAuthorizationForAppResponse {
    public String contentType;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}