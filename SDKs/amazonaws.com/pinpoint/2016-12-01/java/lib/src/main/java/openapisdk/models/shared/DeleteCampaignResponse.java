package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCampaignResponse {
    @JsonProperty("CampaignResponse")
    public CampaignResponse campaignResponse;
    public DeleteCampaignResponse withCampaignResponse(CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
}