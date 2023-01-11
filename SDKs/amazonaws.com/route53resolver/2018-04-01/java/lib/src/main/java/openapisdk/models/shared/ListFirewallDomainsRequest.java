package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallDomainsRequest {
    @JsonProperty("FirewallDomainListId")
    public String firewallDomainListId;
    public ListFirewallDomainsRequest withFirewallDomainListId(String firewallDomainListId) {
        this.firewallDomainListId = firewallDomainListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListFirewallDomainsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallDomainsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}