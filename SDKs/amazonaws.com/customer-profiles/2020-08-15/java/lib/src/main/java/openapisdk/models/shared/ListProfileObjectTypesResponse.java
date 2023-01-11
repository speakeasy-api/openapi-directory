package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProfileObjectTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public ListProfileObjectTypeItem[] items;
    public ListProfileObjectTypesResponse withItems(ListProfileObjectTypeItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListProfileObjectTypesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}