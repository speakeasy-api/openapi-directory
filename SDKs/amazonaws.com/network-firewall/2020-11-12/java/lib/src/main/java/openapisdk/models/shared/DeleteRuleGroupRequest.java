package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRuleGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroupArn")
    public String ruleGroupArn;
    public DeleteRuleGroupRequest withRuleGroupArn(String ruleGroupArn) {
        this.ruleGroupArn = ruleGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroupName")
    public String ruleGroupName;
    public DeleteRuleGroupRequest withRuleGroupName(String ruleGroupName) {
        this.ruleGroupName = ruleGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RuleGroupTypeEnum type;
    public DeleteRuleGroupRequest withType(RuleGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}