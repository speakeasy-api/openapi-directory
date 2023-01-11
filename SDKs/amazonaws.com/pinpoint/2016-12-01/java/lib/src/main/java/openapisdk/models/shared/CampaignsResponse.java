package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignsResponse
 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
**/
public class CampaignsResponse {
    @JsonProperty("Item")
    public CampaignResponse[] item;
    public CampaignsResponse withItem(CampaignResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public CampaignsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}