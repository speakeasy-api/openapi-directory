package openapisdk.models.operations;



public class PutSettingsOrganizationsOrganizationNameResponse {
    public String contentType;
    public PutSettingsOrganizationsOrganizationNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public PutSettingsOrganizationsOrganizationNameResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public PutSettingsOrganizationsOrganizationNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}