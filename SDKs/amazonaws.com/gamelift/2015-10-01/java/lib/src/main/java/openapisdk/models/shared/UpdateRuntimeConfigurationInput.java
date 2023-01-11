package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateRuntimeConfigurationInput
 * Represents the input for a request operation.
**/
public class UpdateRuntimeConfigurationInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public UpdateRuntimeConfigurationInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("RuntimeConfiguration")
    public RuntimeConfiguration runtimeConfiguration;
    public UpdateRuntimeConfigurationInput withRuntimeConfiguration(RuntimeConfiguration runtimeConfiguration) {
        this.runtimeConfiguration = runtimeConfiguration;
        return this;
    }
}