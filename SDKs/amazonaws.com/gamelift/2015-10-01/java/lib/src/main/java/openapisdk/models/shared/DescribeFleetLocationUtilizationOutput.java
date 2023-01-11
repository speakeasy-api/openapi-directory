package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetLocationUtilizationOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetLocationUtilizationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetUtilization")
    public FleetUtilization fleetUtilization;
    public DescribeFleetLocationUtilizationOutput withFleetUtilization(FleetUtilization fleetUtilization) {
        this.fleetUtilization = fleetUtilization;
        return this;
    }
}