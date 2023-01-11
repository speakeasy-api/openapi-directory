package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteVpcPeeringAuthorizationInput
 * Represents the input for a request operation.
**/
public class DeleteVpcPeeringAuthorizationInput {
    @JsonProperty("GameLiftAwsAccountId")
    public String gameLiftAwsAccountId;
    public DeleteVpcPeeringAuthorizationInput withGameLiftAwsAccountId(String gameLiftAwsAccountId) {
        this.gameLiftAwsAccountId = gameLiftAwsAccountId;
        return this;
    }
    @JsonProperty("PeerVpcId")
    public String peerVpcId;
    public DeleteVpcPeeringAuthorizationInput withPeerVpcId(String peerVpcId) {
        this.peerVpcId = peerVpcId;
        return this;
    }
}