package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRouteCalculatorsResponse {
    @JsonProperty("Entries")
    public ListRouteCalculatorsResponseEntry[] entries;
    public ListRouteCalculatorsResponse withEntries(ListRouteCalculatorsResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRouteCalculatorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}