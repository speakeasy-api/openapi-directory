package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatelessRuleGroup
 * Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. 
**/
public class StatelessRuleGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Priority")
    public Long priority;
    public StatelessRuleGroup withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public StatelessRuleGroup withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroupName")
    public String ruleGroupName;
    public StatelessRuleGroup withRuleGroupName(String ruleGroupName) {
        this.ruleGroupName = ruleGroupName;
        return this;
    }
}