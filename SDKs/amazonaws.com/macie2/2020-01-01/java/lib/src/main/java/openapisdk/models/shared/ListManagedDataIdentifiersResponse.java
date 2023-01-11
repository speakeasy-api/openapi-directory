package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListManagedDataIdentifiersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ManagedDataIdentifierSummary[] items;
    public ListManagedDataIdentifiersResponse withItems(ManagedDataIdentifierSummary[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListManagedDataIdentifiersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}