package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteFleetLocationsOutput
 * Represents the returned data in response to a request operation.
**/
public class DeleteFleetLocationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DeleteFleetLocationsOutput withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public DeleteFleetLocationsOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationStates")
    public LocationState[] locationStates;
    public DeleteFleetLocationsOutput withLocationStates(LocationState[] locationStates) {
        this.locationStates = locationStates;
        return this;
    }
}