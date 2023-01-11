package openapisdk.models.operations;



public class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse {
    public String contentType;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}