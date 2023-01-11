package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourceInventoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResourceInventoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceInventoryList")
    public ResourceInventory[] resourceInventoryList;
    public ListResourceInventoryResponse withResourceInventoryList(ResourceInventory[] resourceInventoryList) {
        this.resourceInventoryList = resourceInventoryList;
        return this;
    }
}