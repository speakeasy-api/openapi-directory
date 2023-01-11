package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRuleGroupRequest {
    @JsonProperty("Capacity")
    public Long capacity;
    public CreateRuleGroupRequest withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateRuleGroupRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public CreateRuleGroupRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroup")
    public RuleGroup ruleGroup;
    public CreateRuleGroupRequest withRuleGroup(RuleGroup ruleGroup) {
        this.ruleGroup = ruleGroup;
        return this;
    }
    @JsonProperty("RuleGroupName")
    public String ruleGroupName;
    public CreateRuleGroupRequest withRuleGroupName(String ruleGroupName) {
        this.ruleGroupName = ruleGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public String rules;
    public CreateRuleGroupRequest withRules(String rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateRuleGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Type")
    public RuleGroupTypeEnum type;
    public CreateRuleGroupRequest withType(RuleGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}