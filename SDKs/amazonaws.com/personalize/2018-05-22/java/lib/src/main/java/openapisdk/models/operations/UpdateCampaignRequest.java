package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCampaignRequest {
    public UpdateCampaignHeaders headers;
    public UpdateCampaignRequest withHeaders(UpdateCampaignHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCampaignRequest request;
    public UpdateCampaignRequest withRequest(openapisdk.models.shared.UpdateCampaignRequest request) {
        this.request = request;
        return this;
    }
}