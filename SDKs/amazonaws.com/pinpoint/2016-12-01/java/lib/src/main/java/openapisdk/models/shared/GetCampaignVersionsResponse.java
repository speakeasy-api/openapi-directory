package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCampaignVersionsResponse {
    @JsonProperty("CampaignsResponse")
    public CampaignsResponse campaignsResponse;
    public GetCampaignVersionsResponse withCampaignsResponse(CampaignsResponse campaignsResponse) {
        this.campaignsResponse = campaignsResponse;
        return this;
    }
}