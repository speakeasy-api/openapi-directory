package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeVpcPeeringConnectionsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeVpcPeeringConnectionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcPeeringConnections")
    public VpcPeeringConnection[] vpcPeeringConnections;
    public DescribeVpcPeeringConnectionsOutput withVpcPeeringConnections(VpcPeeringConnection[] vpcPeeringConnections) {
        this.vpcPeeringConnections = vpcPeeringConnections;
        return this;
    }
}