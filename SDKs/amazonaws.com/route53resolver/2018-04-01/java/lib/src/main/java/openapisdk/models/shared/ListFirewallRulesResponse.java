package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRules")
    public FirewallRule[] firewallRules;
    public ListFirewallRulesResponse withFirewallRules(FirewallRule[] firewallRules) {
        this.firewallRules = firewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallRulesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}