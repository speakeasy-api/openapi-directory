package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domains")
    public DomainSummary[] domains;
    public ListDomainsResponse withDomains(DomainSummary[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDomainsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}