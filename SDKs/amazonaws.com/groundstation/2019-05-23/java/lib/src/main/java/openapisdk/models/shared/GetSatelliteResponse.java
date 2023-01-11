package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSatelliteResponse
 * <p/>
**/
public class GetSatelliteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStations")
    public String[] groundStations;
    public GetSatelliteResponse withGroundStations(String[] groundStations) {
        this.groundStations = groundStations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noradSatelliteID")
    public Long noradSatelliteID;
    public GetSatelliteResponse withNoradSatelliteId(Long noradSatelliteID) {
        this.noradSatelliteID = noradSatelliteID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteArn")
    public String satelliteArn;
    public GetSatelliteResponse withSatelliteArn(String satelliteArn) {
        this.satelliteArn = satelliteArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteId")
    public String satelliteId;
    public GetSatelliteResponse withSatelliteId(String satelliteId) {
        this.satelliteId = satelliteId;
        return this;
    }
}