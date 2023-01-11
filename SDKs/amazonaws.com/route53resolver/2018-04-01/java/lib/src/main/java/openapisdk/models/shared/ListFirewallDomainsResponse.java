package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewallDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domains")
    public String[] domains;
    public ListFirewallDomainsResponse withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFirewallDomainsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}