package openapisdk.models.operations;



public class OauthAuthorizationsCreateAuthorizationResponse {
    public String contentType;
    public OauthAuthorizationsCreateAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OauthAuthorizationsCreateAuthorizationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsCreateAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public OauthAuthorizationsCreateAuthorizationResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsCreateAuthorizationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OauthAuthorizationsCreateAuthorizationResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}