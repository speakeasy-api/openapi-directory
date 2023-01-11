package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCampaignResponse {
    @JsonProperty("CampaignResponse")
    public CampaignResponse campaignResponse;
    public GetCampaignResponse withCampaignResponse(CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
}