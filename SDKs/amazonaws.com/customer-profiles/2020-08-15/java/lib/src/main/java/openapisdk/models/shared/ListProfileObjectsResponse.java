package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProfileObjectsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public ListProfileObjectsItem[] items;
    public ListProfileObjectsResponse withItems(ListProfileObjectsItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListProfileObjectsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}