package openapisdk.models.operations;



public class GetSettingsOrganizationsOrganizationNameResponse {
    public String contentType;
    public GetSettingsOrganizationsOrganizationNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public GetSettingsOrganizationsOrganizationNameResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public GetSettingsOrganizationsOrganizationNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}