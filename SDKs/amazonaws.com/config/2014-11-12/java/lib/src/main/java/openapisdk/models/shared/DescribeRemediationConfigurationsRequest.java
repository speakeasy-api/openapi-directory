package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeRemediationConfigurationsRequest {
    @JsonProperty("ConfigRuleNames")
    public String[] configRuleNames;
    public DescribeRemediationConfigurationsRequest withConfigRuleNames(String[] configRuleNames) {
        this.configRuleNames = configRuleNames;
        return this;
    }
}