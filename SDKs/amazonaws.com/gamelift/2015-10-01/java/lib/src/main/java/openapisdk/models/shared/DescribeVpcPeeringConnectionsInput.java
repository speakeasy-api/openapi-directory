package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeVpcPeeringConnectionsInput
 * Represents the input for a request operation.
**/
public class DescribeVpcPeeringConnectionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeVpcPeeringConnectionsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
}