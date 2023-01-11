package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopFleetActionsOutput
 * Represents the input for a request operation.
**/
public class StopFleetActionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public StopFleetActionsOutput withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public StopFleetActionsOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
}