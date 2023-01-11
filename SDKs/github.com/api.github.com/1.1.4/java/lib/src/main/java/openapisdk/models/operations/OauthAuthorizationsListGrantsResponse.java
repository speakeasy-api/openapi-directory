package openapisdk.models.operations;



public class OauthAuthorizationsListGrantsResponse {
    public String contentType;
    public OauthAuthorizationsListGrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OauthAuthorizationsListGrantsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OauthAuthorizationsListGrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApplicationGrant[] applicationGrants;
    public OauthAuthorizationsListGrantsResponse withApplicationGrants(openapisdk.models.shared.ApplicationGrant[] applicationGrants) {
        this.applicationGrants = applicationGrants;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OauthAuthorizationsListGrantsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}