package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest {
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams pathParams;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest withPathParams(PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReceiverInput request;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest withRequest(openapisdk.models.shared.ReceiverInput request) {
        this.request = request;
        return this;
    }
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity security;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest withSecurity(PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity security) {
        this.security = security;
        return this;
    }
}