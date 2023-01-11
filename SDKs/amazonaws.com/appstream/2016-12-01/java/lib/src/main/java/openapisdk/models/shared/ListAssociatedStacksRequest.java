package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociatedStacksRequest {
    @JsonProperty("FleetName")
    public String fleetName;
    public ListAssociatedStacksRequest withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssociatedStacksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}