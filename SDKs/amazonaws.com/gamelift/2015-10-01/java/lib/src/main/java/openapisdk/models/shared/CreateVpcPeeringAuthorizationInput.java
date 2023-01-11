package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateVpcPeeringAuthorizationInput
 * Represents the input for a request operation.
**/
public class CreateVpcPeeringAuthorizationInput {
    @JsonProperty("GameLiftAwsAccountId")
    public String gameLiftAwsAccountId;
    public CreateVpcPeeringAuthorizationInput withGameLiftAwsAccountId(String gameLiftAwsAccountId) {
        this.gameLiftAwsAccountId = gameLiftAwsAccountId;
        return this;
    }
    @JsonProperty("PeerVpcId")
    public String peerVpcId;
    public CreateVpcPeeringAuthorizationInput withPeerVpcId(String peerVpcId) {
        this.peerVpcId = peerVpcId;
        return this;
    }
}