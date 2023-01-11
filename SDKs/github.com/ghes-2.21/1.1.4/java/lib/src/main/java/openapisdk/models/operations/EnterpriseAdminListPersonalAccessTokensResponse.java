package openapisdk.models.operations;



public class EnterpriseAdminListPersonalAccessTokensResponse {
    public String contentType;
    public EnterpriseAdminListPersonalAccessTokensResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public EnterpriseAdminListPersonalAccessTokensResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListPersonalAccessTokensResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Authorization[] authorizations;
    public EnterpriseAdminListPersonalAccessTokensResponse withAuthorizations(openapisdk.models.shared.Authorization[] authorizations) {
        this.authorizations = authorizations;
        return this;
    }
}