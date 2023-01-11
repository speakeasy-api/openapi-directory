package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCampaignsResponse {
    @JsonProperty("CampaignsResponse")
    public CampaignsResponse campaignsResponse;
    public GetCampaignsResponse withCampaignsResponse(CampaignsResponse campaignsResponse) {
        this.campaignsResponse = campaignsResponse;
        return this;
    }
}