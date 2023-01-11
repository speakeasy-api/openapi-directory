package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteVpcPeeringConnectionInput
 * Represents the input for a request operation.
**/
public class DeleteVpcPeeringConnectionInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DeleteVpcPeeringConnectionInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public DeleteVpcPeeringConnectionInput withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}