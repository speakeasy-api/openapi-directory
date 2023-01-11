package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMapsResponse {
    @JsonProperty("Entries")
    public ListMapsResponseEntry[] entries;
    public ListMapsResponse withEntries(ListMapsResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMapsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}