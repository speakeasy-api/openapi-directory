package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountIntegrationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public ListIntegrationItem[] items;
    public ListAccountIntegrationsResponse withItems(ListIntegrationItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountIntegrationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}