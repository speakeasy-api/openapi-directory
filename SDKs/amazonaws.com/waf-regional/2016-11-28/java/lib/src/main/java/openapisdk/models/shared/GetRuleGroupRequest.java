package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleGroupRequest {
    @JsonProperty("RuleGroupId")
    public String ruleGroupId;
    public GetRuleGroupRequest withRuleGroupId(String ruleGroupId) {
        this.ruleGroupId = ruleGroupId;
        return this;
    }
}