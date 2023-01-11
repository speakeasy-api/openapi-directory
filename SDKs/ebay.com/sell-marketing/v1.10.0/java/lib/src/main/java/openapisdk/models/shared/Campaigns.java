package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Campaigns
 * This type contains a list of campaigns.
**/
public class Campaigns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaigns")
    public Campaign[] campaigns;
    public Campaigns withCampaigns(Campaign[] campaigns) {
        this.campaigns = campaigns;
        return this;
    }
}