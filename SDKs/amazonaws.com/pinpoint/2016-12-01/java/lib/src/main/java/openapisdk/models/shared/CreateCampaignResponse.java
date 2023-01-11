package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCampaignResponse {
    @JsonProperty("CampaignResponse")
    public CampaignResponse campaignResponse;
    public CreateCampaignResponse withCampaignResponse(CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
}