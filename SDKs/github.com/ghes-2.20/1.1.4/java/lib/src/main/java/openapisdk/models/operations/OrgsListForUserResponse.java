package openapisdk.models.operations;



public class OrgsListForUserResponse {
    public String contentType;
    public OrgsListForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListForUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrganizationSimple[] organizationSimples;
    public OrgsListForUserResponse withOrganizationSimples(openapisdk.models.shared.OrganizationSimple[] organizationSimples) {
        this.organizationSimples = organizationSimples;
        return this;
    }
}