package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetUtilizationOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetUtilizationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetUtilization")
    public FleetUtilization[] fleetUtilization;
    public DescribeFleetUtilizationOutput withFleetUtilization(FleetUtilization[] fleetUtilization) {
        this.fleetUtilization = fleetUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetUtilizationOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}