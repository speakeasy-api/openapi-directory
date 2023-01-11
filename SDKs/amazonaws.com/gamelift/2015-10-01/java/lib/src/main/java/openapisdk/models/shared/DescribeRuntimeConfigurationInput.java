package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeRuntimeConfigurationInput
 * Represents the input for a request operation.
**/
public class DescribeRuntimeConfigurationInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeRuntimeConfigurationInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
}