package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDomainsResponse
 * The ListDomains response includes the following elements.
**/
public class ListDomainsResponse {
    @JsonProperty("Domains")
    public DomainSummary[] domains;
    public ListDomainsResponse withDomains(DomainSummary[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageMarker")
    public String nextPageMarker;
    public ListDomainsResponse withNextPageMarker(String nextPageMarker) {
        this.nextPageMarker = nextPageMarker;
        return this;
    }
}