package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDirectConnectGatewayAssociationProposalResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociationProposal")
    public DirectConnectGatewayAssociationProposal directConnectGatewayAssociationProposal;
    public DeleteDirectConnectGatewayAssociationProposalResult withDirectConnectGatewayAssociationProposal(DirectConnectGatewayAssociationProposal directConnectGatewayAssociationProposal) {
        this.directConnectGatewayAssociationProposal = directConnectGatewayAssociationProposal;
        return this;
    }
}