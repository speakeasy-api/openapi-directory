package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetLocationCapacityOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetLocationCapacityOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetCapacity")
    public FleetCapacity fleetCapacity;
    public DescribeFleetLocationCapacityOutput withFleetCapacity(FleetCapacity fleetCapacity) {
        this.fleetCapacity = fleetCapacity;
        return this;
    }
}