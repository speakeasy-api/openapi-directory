package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetAttributesOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetAttributesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetAttributes")
    public FleetAttributes[] fleetAttributes;
    public DescribeFleetAttributesOutput withFleetAttributes(FleetAttributes[] fleetAttributes) {
        this.fleetAttributes = fleetAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetAttributesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}