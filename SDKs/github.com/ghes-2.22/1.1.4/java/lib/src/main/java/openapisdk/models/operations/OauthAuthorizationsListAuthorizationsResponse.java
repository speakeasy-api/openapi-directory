package openapisdk.models.operations;



public class OauthAuthorizationsListAuthorizationsResponse {
    public String contentType;
    public OauthAuthorizationsListAuthorizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OauthAuthorizationsListAuthorizationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsListAuthorizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization[] authorizations;
    public OauthAuthorizationsListAuthorizationsResponse withAuthorizations(openapisdk.models.shared.Authorization[] authorizations) {
        this.authorizations = authorizations;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsListAuthorizationsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}