package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteFleetLocationsInput
 * Represents the input for a request operation.
**/
public class DeleteFleetLocationsInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DeleteFleetLocationsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("Locations")
    public String[] locations;
    public DeleteFleetLocationsInput withLocations(String[] locations) {
        this.locations = locations;
        return this;
    }
}