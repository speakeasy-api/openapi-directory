package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCampaignResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaign")
    public Campaign campaign;
    public DescribeCampaignResponse withCampaign(Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
}