package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteConfigRuleRequest
 * <p/>
**/
public class DeleteConfigRuleRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public DeleteConfigRuleRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
}