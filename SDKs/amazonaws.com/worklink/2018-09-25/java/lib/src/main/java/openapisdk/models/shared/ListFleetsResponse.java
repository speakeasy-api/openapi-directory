package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFleetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetSummaryList")
    public FleetSummary[] fleetSummaryList;
    public ListFleetsResponse withFleetSummaryList(FleetSummary[] fleetSummaryList) {
        this.fleetSummaryList = fleetSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFleetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}