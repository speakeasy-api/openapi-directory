package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGeofencesResponse {
    @JsonProperty("Entries")
    public ListGeofenceResponseEntry[] entries;
    public ListGeofencesResponse withEntries(ListGeofenceResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGeofencesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}