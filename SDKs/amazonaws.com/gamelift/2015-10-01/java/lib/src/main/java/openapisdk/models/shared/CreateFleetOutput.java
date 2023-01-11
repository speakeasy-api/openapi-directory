package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFleetOutput
 * Represents the returned data in response to a request operation.
**/
public class CreateFleetOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetAttributes")
    public FleetAttributes fleetAttributes;
    public CreateFleetOutput withFleetAttributes(FleetAttributes fleetAttributes) {
        this.fleetAttributes = fleetAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationStates")
    public LocationState[] locationStates;
    public CreateFleetOutput withLocationStates(LocationState[] locationStates) {
        this.locationStates = locationStates;
        return this;
    }
}