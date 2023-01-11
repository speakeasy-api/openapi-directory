package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRuleGroupResponse {
    @JsonProperty("RuleGroupResponse")
    public RuleGroupResponse ruleGroupResponse;
    public UpdateRuleGroupResponse withRuleGroupResponse(RuleGroupResponse ruleGroupResponse) {
        this.ruleGroupResponse = ruleGroupResponse;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateRuleGroupResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}