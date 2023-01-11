package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRuleGroupRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteRuleGroupRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RuleGroupId")
    public String ruleGroupId;
    public DeleteRuleGroupRequest withRuleGroupId(String ruleGroupId) {
        this.ruleGroupId = ruleGroupId;
        return this;
    }
}