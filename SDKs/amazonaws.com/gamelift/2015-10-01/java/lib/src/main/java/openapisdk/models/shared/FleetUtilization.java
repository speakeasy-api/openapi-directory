package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FleetUtilization
 * <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetUtilization</a> | <a>DescribeFleetLocationUtilization</a> </p>
**/
public class FleetUtilization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActiveGameSessionCount")
    public Long activeGameSessionCount;
    public FleetUtilization withActiveGameSessionCount(Long activeGameSessionCount) {
        this.activeGameSessionCount = activeGameSessionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActiveServerProcessCount")
    public Long activeServerProcessCount;
    public FleetUtilization withActiveServerProcessCount(Long activeServerProcessCount) {
        this.activeServerProcessCount = activeServerProcessCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentPlayerSessionCount")
    public Long currentPlayerSessionCount;
    public FleetUtilization withCurrentPlayerSessionCount(Long currentPlayerSessionCount) {
        this.currentPlayerSessionCount = currentPlayerSessionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public FleetUtilization withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public FleetUtilization withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public FleetUtilization withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumPlayerSessionCount")
    public Long maximumPlayerSessionCount;
    public FleetUtilization withMaximumPlayerSessionCount(Long maximumPlayerSessionCount) {
        this.maximumPlayerSessionCount = maximumPlayerSessionCount;
        return this;
    }
}