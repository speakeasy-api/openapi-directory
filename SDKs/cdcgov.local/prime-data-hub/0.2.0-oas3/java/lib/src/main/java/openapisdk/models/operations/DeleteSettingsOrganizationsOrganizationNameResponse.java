package openapisdk.models.operations;



public class DeleteSettingsOrganizationsOrganizationNameResponse {
    public String contentType;
    public DeleteSettingsOrganizationsOrganizationNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Organization organization;
    public DeleteSettingsOrganizationsOrganizationNameResponse withOrganization(openapisdk.models.shared.Organization organization) {
        this.organization = organization;
        return this;
    }
    public Long statusCode;
    public DeleteSettingsOrganizationsOrganizationNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}