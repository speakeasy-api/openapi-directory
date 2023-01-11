package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCampaignRequest {
    @JsonProperty("campaignArn")
    public String campaignArn;
    public UpdateCampaignRequest withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignConfig")
    public CampaignConfig campaignConfig;
    public UpdateCampaignRequest withCampaignConfig(CampaignConfig campaignConfig) {
        this.campaignConfig = campaignConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minProvisionedTPS")
    public Long minProvisionedTPS;
    public UpdateCampaignRequest withMinProvisionedTps(Long minProvisionedTPS) {
        this.minProvisionedTPS = minProvisionedTPS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public UpdateCampaignRequest withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}