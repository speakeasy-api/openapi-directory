package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRuleGroupResponse {
    @JsonProperty("RuleGroupResponse")
    public RuleGroupResponse ruleGroupResponse;
    public DeleteRuleGroupResponse withRuleGroupResponse(RuleGroupResponse ruleGroupResponse) {
        this.ruleGroupResponse = ruleGroupResponse;
        return this;
    }
}