package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallPolicy
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
**/
public class FirewallPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatefulRuleGroupReferences")
    public StatefulRuleGroupReference[] statefulRuleGroupReferences;
    public FirewallPolicy withStatefulRuleGroupReferences(StatefulRuleGroupReference[] statefulRuleGroupReferences) {
        this.statefulRuleGroupReferences = statefulRuleGroupReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatelessCustomActions")
    public CustomAction[] statelessCustomActions;
    public FirewallPolicy withStatelessCustomActions(CustomAction[] statelessCustomActions) {
        this.statelessCustomActions = statelessCustomActions;
        return this;
    }
    @JsonProperty("StatelessDefaultActions")
    public String[] statelessDefaultActions;
    public FirewallPolicy withStatelessDefaultActions(String[] statelessDefaultActions) {
        this.statelessDefaultActions = statelessDefaultActions;
        return this;
    }
    @JsonProperty("StatelessFragmentDefaultActions")
    public String[] statelessFragmentDefaultActions;
    public FirewallPolicy withStatelessFragmentDefaultActions(String[] statelessFragmentDefaultActions) {
        this.statelessFragmentDefaultActions = statelessFragmentDefaultActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatelessRuleGroupReferences")
    public StatelessRuleGroupReference[] statelessRuleGroupReferences;
    public FirewallPolicy withStatelessRuleGroupReferences(StatelessRuleGroupReference[] statelessRuleGroupReferences) {
        this.statelessRuleGroupReferences = statelessRuleGroupReferences;
        return this;
    }
}