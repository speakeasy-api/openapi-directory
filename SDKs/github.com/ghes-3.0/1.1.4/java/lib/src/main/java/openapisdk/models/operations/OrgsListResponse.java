package openapisdk.models.operations;



public class OrgsListResponse {
    public String contentType;
    public OrgsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrganizationSimple[] organizationSimples;
    public OrgsListResponse withOrganizationSimples(openapisdk.models.shared.OrganizationSimple[] organizationSimples) {
        this.organizationSimples = organizationSimples;
        return this;
    }
}