package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SatelliteListItem
 * Item in a list of satellites.
**/
public class SatelliteListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStations")
    public String[] groundStations;
    public SatelliteListItem withGroundStations(String[] groundStations) {
        this.groundStations = groundStations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noradSatelliteID")
    public Long noradSatelliteID;
    public SatelliteListItem withNoradSatelliteId(Long noradSatelliteID) {
        this.noradSatelliteID = noradSatelliteID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteArn")
    public String satelliteArn;
    public SatelliteListItem withSatelliteArn(String satelliteArn) {
        this.satelliteArn = satelliteArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satelliteId")
    public String satelliteId;
    public SatelliteListItem withSatelliteId(String satelliteId) {
        this.satelliteId = satelliteId;
        return this;
    }
}