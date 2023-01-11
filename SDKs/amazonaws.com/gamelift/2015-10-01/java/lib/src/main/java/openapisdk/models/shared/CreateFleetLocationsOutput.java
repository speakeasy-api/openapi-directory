package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFleetLocationsOutput
 * Represents the returned data in response to a request operation. 
**/
public class CreateFleetLocationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public CreateFleetLocationsOutput withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public CreateFleetLocationsOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationStates")
    public LocationState[] locationStates;
    public CreateFleetLocationsOutput withLocationStates(LocationState[] locationStates) {
        this.locationStates = locationStates;
        return this;
    }
}