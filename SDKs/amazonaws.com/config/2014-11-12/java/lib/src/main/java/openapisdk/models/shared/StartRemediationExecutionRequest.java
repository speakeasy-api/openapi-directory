package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartRemediationExecutionRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public StartRemediationExecutionRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonProperty("ResourceKeys")
    public ResourceKey[] resourceKeys;
    public StartRemediationExecutionRequest withResourceKeys(ResourceKey[] resourceKeys) {
        this.resourceKeys = resourceKeys;
        return this;
    }
}