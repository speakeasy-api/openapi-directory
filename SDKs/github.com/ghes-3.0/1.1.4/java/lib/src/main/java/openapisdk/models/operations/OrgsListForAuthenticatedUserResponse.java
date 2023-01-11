package openapisdk.models.operations;



public class OrgsListForAuthenticatedUserResponse {
    public String contentType;
    public OrgsListForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsListForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrganizationSimple[] organizationSimples;
    public OrgsListForAuthenticatedUserResponse withOrganizationSimples(openapisdk.models.shared.OrganizationSimple[] organizationSimples) {
        this.organizationSimples = organizationSimples;
        return this;
    }
}