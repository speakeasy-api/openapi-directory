package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartFleetActionsInput
 * Represents the input for a request operation.
**/
public class StartFleetActionsInput {
    @JsonProperty("Actions")
    public FleetActionEnum[] actions;
    public StartFleetActionsInput withActions(FleetActionEnum[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("FleetId")
    public String fleetId;
    public StartFleetActionsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public StartFleetActionsInput withLocation(String location) {
        this.location = location;
        return this;
    }
}