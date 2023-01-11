package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallConfigs")
    public FirewallConfig[] firewallConfigs;
    public ListFirewallConfigsResponse withFirewallConfigs(FirewallConfig[] firewallConfigs) {
        this.firewallConfigs = firewallConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallConfigsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}