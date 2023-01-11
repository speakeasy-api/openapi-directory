package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGroundStationsResponse
 * <p/>
**/
public class ListGroundStationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStationList")
    public GroundStationData[] groundStationList;
    public ListGroundStationsResponse withGroundStationList(GroundStationData[] groundStationList) {
        this.groundStationList = groundStationList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListGroundStationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}