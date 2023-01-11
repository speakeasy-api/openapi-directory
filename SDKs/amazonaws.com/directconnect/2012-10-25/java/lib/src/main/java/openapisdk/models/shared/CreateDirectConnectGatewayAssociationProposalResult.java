package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDirectConnectGatewayAssociationProposalResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAssociationProposal")
    public DirectConnectGatewayAssociationProposal directConnectGatewayAssociationProposal;
    public CreateDirectConnectGatewayAssociationProposalResult withDirectConnectGatewayAssociationProposal(DirectConnectGatewayAssociationProposal directConnectGatewayAssociationProposal) {
        this.directConnectGatewayAssociationProposal = directConnectGatewayAssociationProposal;
        return this;
    }
}