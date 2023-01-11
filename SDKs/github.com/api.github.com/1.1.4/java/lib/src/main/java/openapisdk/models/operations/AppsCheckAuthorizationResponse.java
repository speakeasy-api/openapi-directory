package openapisdk.models.operations;



public class AppsCheckAuthorizationResponse {
    public AppsCheckAuthorizationAuthorization authorization;
    public AppsCheckAuthorizationResponse withAuthorization(AppsCheckAuthorizationAuthorization authorization) {
        this.authorization = authorization;
        return this;
    }
    public String contentType;
    public AppsCheckAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsCheckAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsCheckAuthorizationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}