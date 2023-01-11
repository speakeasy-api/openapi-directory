package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCampaignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignConfig")
    public CampaignConfig campaignConfig;
    public CreateCampaignRequest withCampaignConfig(CampaignConfig campaignConfig) {
        this.campaignConfig = campaignConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minProvisionedTPS")
    public Long minProvisionedTPS;
    public CreateCampaignRequest withMinProvisionedTps(Long minProvisionedTPS) {
        this.minProvisionedTPS = minProvisionedTPS;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateCampaignRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public CreateCampaignRequest withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}