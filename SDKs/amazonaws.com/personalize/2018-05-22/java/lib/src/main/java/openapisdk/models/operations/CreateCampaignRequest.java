package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCampaignRequest {
    public CreateCampaignHeaders headers;
    public CreateCampaignRequest withHeaders(CreateCampaignHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCampaignRequest request;
    public CreateCampaignRequest withRequest(openapisdk.models.shared.CreateCampaignRequest request) {
        this.request = request;
        return this;
    }
}