package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFleetPortSettingsOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateFleetPortSettingsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public UpdateFleetPortSettingsOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
}