package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDomainsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public ListDomainItem[] items;
    public ListDomainsResponse withItems(ListDomainItem[] items) {
        this.items = items;
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