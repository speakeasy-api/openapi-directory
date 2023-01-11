package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCampaignVersionResponse {
    @JsonProperty("CampaignResponse")
    public CampaignResponse campaignResponse;
    public GetCampaignVersionResponse withCampaignResponse(CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
}