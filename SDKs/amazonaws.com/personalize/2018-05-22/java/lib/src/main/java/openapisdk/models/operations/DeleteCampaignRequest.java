package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCampaignRequest {
    public DeleteCampaignHeaders headers;
    public DeleteCampaignRequest withHeaders(DeleteCampaignHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCampaignRequest request;
    public DeleteCampaignRequest withRequest(openapisdk.models.shared.DeleteCampaignRequest request) {
        this.request = request;
        return this;
    }
}