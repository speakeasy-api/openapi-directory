package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRuleGroupResponse {
    @JsonProperty("RuleGroupResponse")
    public RuleGroupResponse ruleGroupResponse;
    public CreateRuleGroupResponse withRuleGroupResponse(RuleGroupResponse ruleGroupResponse) {
        this.ruleGroupResponse = ruleGroupResponse;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public CreateRuleGroupResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}