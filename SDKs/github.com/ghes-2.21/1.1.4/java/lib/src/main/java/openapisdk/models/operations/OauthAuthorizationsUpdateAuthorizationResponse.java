package openapisdk.models.operations;



public class OauthAuthorizationsUpdateAuthorizationResponse {
    public String contentType;
    public OauthAuthorizationsUpdateAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsUpdateAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization authorization;
    public OauthAuthorizationsUpdateAuthorizationResponse withAuthorization(openapisdk.models.shared.Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OauthAuthorizationsUpdateAuthorizationResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}