package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLocationsResponse
 * ListLocationsResponse
**/
public class ListLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Locations")
    public LocationListEntry[] locations;
    public ListLocationsResponse withLocations(LocationListEntry[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLocationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}