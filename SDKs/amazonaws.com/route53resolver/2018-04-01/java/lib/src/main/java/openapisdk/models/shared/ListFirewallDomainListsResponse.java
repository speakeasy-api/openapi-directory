package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallDomainListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallDomainLists")
    public FirewallDomainListMetadata[] firewallDomainLists;
    public ListFirewallDomainListsResponse withFirewallDomainLists(FirewallDomainListMetadata[] firewallDomainLists) {
        this.firewallDomainLists = firewallDomainLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallDomainListsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}