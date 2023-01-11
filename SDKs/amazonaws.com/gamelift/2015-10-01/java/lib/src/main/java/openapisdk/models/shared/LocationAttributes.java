package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationAttributes
 * <p>Represents a location in a multi-location fleet.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetLocationAttributes</a> </p>
**/
public class LocationAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationState")
    public LocationState locationState;
    public LocationAttributes withLocationState(LocationState locationState) {
        this.locationState = locationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StoppedActions")
    public FleetActionEnum[] stoppedActions;
    public LocationAttributes withStoppedActions(FleetActionEnum[] stoppedActions) {
        this.stoppedActions = stoppedActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateStatus")
    public LocationUpdateStatusEnum updateStatus;
    public LocationAttributes withUpdateStatus(LocationUpdateStatusEnum updateStatus) {
        this.updateStatus = updateStatus;
        return this;
    }
}