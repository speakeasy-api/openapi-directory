package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCampaignRequest {
    @JsonProperty("campaignArn")
    public String campaignArn;
    public DescribeCampaignRequest withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
}