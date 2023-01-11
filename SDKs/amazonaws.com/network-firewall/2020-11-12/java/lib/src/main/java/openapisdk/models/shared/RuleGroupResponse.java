package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleGroupResponse
 * The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
**/
public class RuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Capacity")
    public Long capacity;
    public RuleGroupResponse withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public RuleGroupResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("RuleGroupArn")
    public String ruleGroupArn;
    public RuleGroupResponse withRuleGroupArn(String ruleGroupArn) {
        this.ruleGroupArn = ruleGroupArn;
        return this;
    }
    @JsonProperty("RuleGroupId")
    public String ruleGroupId;
    public RuleGroupResponse withRuleGroupId(String ruleGroupId) {
        this.ruleGroupId = ruleGroupId;
        return this;
    }
    @JsonProperty("RuleGroupName")
    public String ruleGroupName;
    public RuleGroupResponse withRuleGroupName(String ruleGroupName) {
        this.ruleGroupName = ruleGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroupStatus")
    public ResourceStatusEnum ruleGroupStatus;
    public RuleGroupResponse withRuleGroupStatus(ResourceStatusEnum ruleGroupStatus) {
        this.ruleGroupStatus = ruleGroupStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public RuleGroupResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RuleGroupTypeEnum type;
    public RuleGroupResponse withType(RuleGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}