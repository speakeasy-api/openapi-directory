package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallRuleGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRuleGroups")
    public FirewallRuleGroupMetadata[] firewallRuleGroups;
    public ListFirewallRuleGroupsResponse withFirewallRuleGroups(FirewallRuleGroupMetadata[] firewallRuleGroups) {
        this.firewallRuleGroups = firewallRuleGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallRuleGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}