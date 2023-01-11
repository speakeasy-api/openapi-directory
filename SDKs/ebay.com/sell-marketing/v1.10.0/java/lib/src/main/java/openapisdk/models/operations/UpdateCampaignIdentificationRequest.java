package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCampaignIdentificationRequest {
    public UpdateCampaignIdentificationPathParams pathParams;
    public UpdateCampaignIdentificationRequest withPathParams(UpdateCampaignIdentificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCampaignIdentificationRequest request;
    public UpdateCampaignIdentificationRequest withRequest(openapisdk.models.shared.UpdateCampaignIdentificationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCampaignIdentificationSecurity security;
    public UpdateCampaignIdentificationRequest withSecurity(UpdateCampaignIdentificationSecurity security) {
        this.security = security;
        return this;
    }
}