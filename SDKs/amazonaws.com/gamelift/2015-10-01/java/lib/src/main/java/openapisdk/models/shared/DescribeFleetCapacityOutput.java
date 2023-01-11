package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetCapacityOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetCapacityOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetCapacity")
    public FleetCapacity[] fleetCapacity;
    public DescribeFleetCapacityOutput withFleetCapacity(FleetCapacity[] fleetCapacity) {
        this.fleetCapacity = fleetCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetCapacityOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}