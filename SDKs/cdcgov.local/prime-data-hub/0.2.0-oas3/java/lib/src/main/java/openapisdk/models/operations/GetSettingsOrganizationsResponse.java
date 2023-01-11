package openapisdk.models.operations;



public class GetSettingsOrganizationsResponse {
    public String contentType;
    public GetSettingsOrganizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSettingsOrganizationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Organization[] organizations;
    public GetSettingsOrganizationsResponse withOrganizations(openapisdk.models.shared.Organization[] organizations) {
        this.organizations = organizations;
        return this;
    }
    public Long statusCode;
    public GetSettingsOrganizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}