package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignConfig
 * The configuration details of a campaign.
**/
public class CampaignConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemExplorationConfig")
    public java.util.Map<String, String> itemExplorationConfig;
    public CampaignConfig withItemExplorationConfig(java.util.Map<String, String> itemExplorationConfig) {
        this.itemExplorationConfig = itemExplorationConfig;
        return this;
    }
}