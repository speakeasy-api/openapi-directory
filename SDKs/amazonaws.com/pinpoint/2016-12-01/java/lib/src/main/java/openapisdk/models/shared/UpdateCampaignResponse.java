package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCampaignResponse {
    @JsonProperty("CampaignResponse")
    public CampaignResponse campaignResponse;
    public UpdateCampaignResponse withCampaignResponse(CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
}