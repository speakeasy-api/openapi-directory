package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCampaignResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignArn")
    public String campaignArn;
    public CreateCampaignResponse withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
}