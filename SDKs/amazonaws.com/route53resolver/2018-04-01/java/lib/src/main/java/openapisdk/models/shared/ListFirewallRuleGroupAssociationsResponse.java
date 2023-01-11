package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallRuleGroupAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRuleGroupAssociations")
    public FirewallRuleGroupAssociation[] firewallRuleGroupAssociations;
    public ListFirewallRuleGroupAssociationsResponse withFirewallRuleGroupAssociations(FirewallRuleGroupAssociation[] firewallRuleGroupAssociations) {
        this.firewallRuleGroupAssociations = firewallRuleGroupAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallRuleGroupAssociationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}