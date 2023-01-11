package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCampaignRequest {
    @JsonProperty("campaignArn")
    public String campaignArn;
    public DeleteCampaignRequest withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
}