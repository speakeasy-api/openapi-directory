package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCampaignRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCampaignRequest request;
    public CreateCampaignRequest withRequest(openapisdk.models.shared.CreateCampaignRequest request) {
        this.request = request;
        return this;
    }
    public CreateCampaignSecurity security;
    public CreateCampaignRequest withSecurity(CreateCampaignSecurity security) {
        this.security = security;
        return this;
    }
}