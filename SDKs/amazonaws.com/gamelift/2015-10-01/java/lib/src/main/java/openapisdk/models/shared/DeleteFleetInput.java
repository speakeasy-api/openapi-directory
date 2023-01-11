package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteFleetInput
 * Represents the input for a request operation.
**/
public class DeleteFleetInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DeleteFleetInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
}