package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDirectConnectGatewayAssociationProposalRequest {
    @JsonProperty("proposalId")
    public String proposalId;
    public DeleteDirectConnectGatewayAssociationProposalRequest withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}