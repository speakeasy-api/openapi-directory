package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeFleetLocationCapacityInput
 * Represents the input for a request operation.
**/
public class DescribeFleetLocationCapacityInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeFleetLocationCapacityInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("Location")
    public String location;
    public DescribeFleetLocationCapacityInput withLocation(String location) {
        this.location = location;
        return this;
    }
}