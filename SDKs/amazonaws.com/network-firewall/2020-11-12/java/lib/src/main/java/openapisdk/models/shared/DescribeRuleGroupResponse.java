package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroup")
    public RuleGroup ruleGroup;
    public DescribeRuleGroupResponse withRuleGroup(RuleGroup ruleGroup) {
        this.ruleGroup = ruleGroup;
        return this;
    }
    @JsonProperty("RuleGroupResponse")
    public RuleGroupResponse ruleGroupResponse;
    public DescribeRuleGroupResponse withRuleGroupResponse(RuleGroupResponse ruleGroupResponse) {
        this.ruleGroupResponse = ruleGroupResponse;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public DescribeRuleGroupResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}