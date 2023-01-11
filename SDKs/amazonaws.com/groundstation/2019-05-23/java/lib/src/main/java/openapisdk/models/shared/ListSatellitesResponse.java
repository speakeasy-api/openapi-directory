package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSatellitesResponse
 * <p/>
**/
public class ListSatellitesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSatellitesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satellites")
    public SatelliteListItem[] satellites;
    public ListSatellitesResponse withSatellites(SatelliteListItem[] satellites) {
        this.satellites = satellites;
        return this;
    }
}