package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public Item[] items;
    public ListItemsResponse withItems(Item[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListItemsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}