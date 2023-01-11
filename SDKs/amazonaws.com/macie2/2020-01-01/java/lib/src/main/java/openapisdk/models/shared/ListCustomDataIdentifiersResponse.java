package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomDataIdentifiersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CustomDataIdentifierSummary[] items;
    public ListCustomDataIdentifiersResponse withItems(CustomDataIdentifierSummary[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListCustomDataIdentifiersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}