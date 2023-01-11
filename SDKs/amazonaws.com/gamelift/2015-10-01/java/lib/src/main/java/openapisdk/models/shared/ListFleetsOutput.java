package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFleetsOutput
 * Represents the returned data in response to a request operation.
**/
public class ListFleetsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetIds")
    public String[] fleetIds;
    public ListFleetsOutput withFleetIds(String[] fleetIds) {
        this.fleetIds = fleetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFleetsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}