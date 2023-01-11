package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRuleGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateRuleGroupRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public UpdateRuleGroupRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroup")
    public RuleGroup ruleGroup;
    public UpdateRuleGroupRequest withRuleGroup(RuleGroup ruleGroup) {
        this.ruleGroup = ruleGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroupArn")
    public String ruleGroupArn;
    public UpdateRuleGroupRequest withRuleGroupArn(String ruleGroupArn) {
        this.ruleGroupArn = ruleGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroupName")
    public String ruleGroupName;
    public UpdateRuleGroupRequest withRuleGroupName(String ruleGroupName) {
        this.ruleGroupName = ruleGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public String rules;
    public UpdateRuleGroupRequest withRules(String rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RuleGroupTypeEnum type;
    public UpdateRuleGroupRequest withType(RuleGroupTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateRuleGroupRequest withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}