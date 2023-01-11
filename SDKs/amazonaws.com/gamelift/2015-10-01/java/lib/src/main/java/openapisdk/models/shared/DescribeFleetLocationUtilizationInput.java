package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeFleetLocationUtilizationInput
 * Represents the input for a request operation.
**/
public class DescribeFleetLocationUtilizationInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeFleetLocationUtilizationInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("Location")
    public String location;
    public DescribeFleetLocationUtilizationInput withLocation(String location) {
        this.location = location;
        return this;
    }
}