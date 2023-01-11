package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSettingsOrganizationsOrganizationNameRequest {
    public PutSettingsOrganizationsOrganizationNamePathParams pathParams;
    public PutSettingsOrganizationsOrganizationNameRequest withPathParams(PutSettingsOrganizationsOrganizationNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Organization1 request;
    public PutSettingsOrganizationsOrganizationNameRequest withRequest(openapisdk.models.shared.Organization1 request) {
        this.request = request;
        return this;
    }
    public PutSettingsOrganizationsOrganizationNameSecurity security;
    public PutSettingsOrganizationsOrganizationNameRequest withSecurity(PutSettingsOrganizationsOrganizationNameSecurity security) {
        this.security = security;
        return this;
    }
}