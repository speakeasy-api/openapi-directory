package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroup")
    public RuleGroup ruleGroup;
    public GetRuleGroupResponse withRuleGroup(RuleGroup ruleGroup) {
        this.ruleGroup = ruleGroup;
        return this;
    }
}