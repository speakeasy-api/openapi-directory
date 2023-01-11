package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallPolicyDescription
 * The definition of the Network Firewall firewall policy.
**/
public class NetworkFirewallPolicyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatefulRuleGroups")
    public StatefulRuleGroup[] statefulRuleGroups;
    public NetworkFirewallPolicyDescription withStatefulRuleGroups(StatefulRuleGroup[] statefulRuleGroups) {
        this.statefulRuleGroups = statefulRuleGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatelessCustomActions")
    public String[] statelessCustomActions;
    public NetworkFirewallPolicyDescription withStatelessCustomActions(String[] statelessCustomActions) {
        this.statelessCustomActions = statelessCustomActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatelessDefaultActions")
    public String[] statelessDefaultActions;
    public NetworkFirewallPolicyDescription withStatelessDefaultActions(String[] statelessDefaultActions) {
        this.statelessDefaultActions = statelessDefaultActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatelessFragmentDefaultActions")
    public String[] statelessFragmentDefaultActions;
    public NetworkFirewallPolicyDescription withStatelessFragmentDefaultActions(String[] statelessFragmentDefaultActions) {
        this.statelessFragmentDefaultActions = statelessFragmentDefaultActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatelessRuleGroups")
    public StatelessRuleGroup[] statelessRuleGroups;
    public NetworkFirewallPolicyDescription withStatelessRuleGroups(StatelessRuleGroup[] statelessRuleGroups) {
        this.statelessRuleGroups = statelessRuleGroups;
        return this;
    }
}