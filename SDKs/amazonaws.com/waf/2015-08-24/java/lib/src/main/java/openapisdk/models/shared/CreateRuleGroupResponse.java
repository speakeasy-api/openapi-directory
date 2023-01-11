package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRuleGroupResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroup")
    public RuleGroup ruleGroup;
    public CreateRuleGroupResponse withRuleGroup(RuleGroup ruleGroup) {
        this.ruleGroup = ruleGroup;
        return this;
    }
}