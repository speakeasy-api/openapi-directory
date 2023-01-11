package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateFleetLocationsInput
 * Represents the input for a request operation.
**/
public class CreateFleetLocationsInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public CreateFleetLocationsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("Locations")
    public LocationConfiguration[] locations;
    public CreateFleetLocationsInput withLocations(LocationConfiguration[] locations) {
        this.locations = locations;
        return this;
    }
}