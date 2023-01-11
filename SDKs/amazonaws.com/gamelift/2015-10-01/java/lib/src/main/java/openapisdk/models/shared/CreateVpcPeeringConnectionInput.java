package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateVpcPeeringConnectionInput
 * Represents the input for a request operation.
**/
public class CreateVpcPeeringConnectionInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public CreateVpcPeeringConnectionInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("PeerVpcAwsAccountId")
    public String peerVpcAwsAccountId;
    public CreateVpcPeeringConnectionInput withPeerVpcAwsAccountId(String peerVpcAwsAccountId) {
        this.peerVpcAwsAccountId = peerVpcAwsAccountId;
        return this;
    }
    @JsonProperty("PeerVpcId")
    public String peerVpcId;
    public CreateVpcPeeringConnectionInput withPeerVpcId(String peerVpcId) {
        this.peerVpcId = peerVpcId;
        return this;
    }
}