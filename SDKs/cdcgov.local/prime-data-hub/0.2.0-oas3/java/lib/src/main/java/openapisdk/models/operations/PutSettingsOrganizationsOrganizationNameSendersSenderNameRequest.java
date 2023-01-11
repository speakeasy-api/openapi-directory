package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest {
    public PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams pathParams;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest withPathParams(PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SenderInput request;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest withRequest(openapisdk.models.shared.SenderInput request) {
        this.request = request;
        return this;
    }
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity security;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest withSecurity(PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity security) {
        this.security = security;
        return this;
    }
}