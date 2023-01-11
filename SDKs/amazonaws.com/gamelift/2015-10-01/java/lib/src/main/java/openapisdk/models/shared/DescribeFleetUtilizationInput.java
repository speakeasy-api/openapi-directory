package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetUtilizationInput
 * Represents the input for a request operation.
**/
public class DescribeFleetUtilizationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetIds")
    public String[] fleetIds;
    public DescribeFleetUtilizationInput withFleetIds(String[] fleetIds) {
        this.fleetIds = fleetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeFleetUtilizationInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetUtilizationInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}