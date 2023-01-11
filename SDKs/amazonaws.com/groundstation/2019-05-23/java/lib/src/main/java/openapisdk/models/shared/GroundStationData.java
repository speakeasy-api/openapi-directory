package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroundStationData
 * Information about the ground station data.
**/
public class GroundStationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStationId")
    public String groundStationId;
    public GroundStationData withGroundStationId(String groundStationId) {
        this.groundStationId = groundStationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundStationName")
    public String groundStationName;
    public GroundStationData withGroundStationName(String groundStationName) {
        this.groundStationName = groundStationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public GroundStationData withRegion(String region) {
        this.region = region;
        return this;
    }
}