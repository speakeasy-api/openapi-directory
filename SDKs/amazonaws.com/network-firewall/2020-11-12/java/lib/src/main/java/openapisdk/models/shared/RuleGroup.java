package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleGroup
 * <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>AWS Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
**/
public class RuleGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleVariables")
    public RuleVariables ruleVariables;
    public RuleGroup withRuleVariables(RuleVariables ruleVariables) {
        this.ruleVariables = ruleVariables;
        return this;
    }
    @JsonProperty("RulesSource")
    public RulesSource rulesSource;
    public RuleGroup withRulesSource(RulesSource rulesSource) {
        this.rulesSource = rulesSource;
        return this;
    }
}