package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrackersResponse {
    @JsonProperty("Entries")
    public ListTrackersResponseEntry[] entries;
    public ListTrackersResponse withEntries(ListTrackersResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTrackersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}