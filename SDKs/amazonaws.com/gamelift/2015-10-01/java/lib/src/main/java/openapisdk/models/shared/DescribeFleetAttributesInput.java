package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetAttributesInput
 * Represents the input for a request operation.
**/
public class DescribeFleetAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetIds")
    public String[] fleetIds;
    public DescribeFleetAttributesInput withFleetIds(String[] fleetIds) {
        this.fleetIds = fleetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeFleetAttributesInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetAttributesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}