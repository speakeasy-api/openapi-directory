package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopFleetActionsInput
 * Represents the input for a request operation.
**/
public class StopFleetActionsInput {
    @JsonProperty("Actions")
    public FleetActionEnum[] actions;
    public StopFleetActionsInput withActions(FleetActionEnum[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("FleetId")
    public String fleetId;
    public StopFleetActionsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public StopFleetActionsInput withLocation(String location) {
        this.location = location;
        return this;
    }
}