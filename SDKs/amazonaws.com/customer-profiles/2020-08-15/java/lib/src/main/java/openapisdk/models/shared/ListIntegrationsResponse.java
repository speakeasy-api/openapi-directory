package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIntegrationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public ListIntegrationItem[] items;
    public ListIntegrationsResponse withItems(ListIntegrationItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIntegrationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}