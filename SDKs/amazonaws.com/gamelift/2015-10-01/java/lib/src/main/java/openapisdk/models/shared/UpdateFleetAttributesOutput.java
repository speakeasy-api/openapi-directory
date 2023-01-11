package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFleetAttributesOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateFleetAttributesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public UpdateFleetAttributesOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
}