package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGeofenceCollectionsResponse {
    @JsonProperty("Entries")
    public ListGeofenceCollectionsResponseEntry[] entries;
    public ListGeofenceCollectionsResponse withEntries(ListGeofenceCollectionsResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGeofenceCollectionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}