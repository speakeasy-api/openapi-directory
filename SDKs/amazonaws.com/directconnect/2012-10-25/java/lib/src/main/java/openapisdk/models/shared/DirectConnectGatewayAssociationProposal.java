package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectConnectGatewayAssociationProposal
 * Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. 
**/
public class DirectConnectGatewayAssociationProposal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedGateway")
    public AssociatedGateway associatedGateway;
    public DirectConnectGatewayAssociationProposal withAssociatedGateway(AssociatedGateway associatedGateway) {
        this.associatedGateway = associatedGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public DirectConnectGatewayAssociationProposal withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayOwnerAccount")
    public String directConnectGatewayOwnerAccount;
    public DirectConnectGatewayAssociationProposal withDirectConnectGatewayOwnerAccount(String directConnectGatewayOwnerAccount) {
        this.directConnectGatewayOwnerAccount = directConnectGatewayOwnerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingAllowedPrefixesToDirectConnectGateway")
    public RouteFilterPrefix[] existingAllowedPrefixesToDirectConnectGateway;
    public DirectConnectGatewayAssociationProposal withExistingAllowedPrefixesToDirectConnectGateway(RouteFilterPrefix[] existingAllowedPrefixesToDirectConnectGateway) {
        this.existingAllowedPrefixesToDirectConnectGateway = existingAllowedPrefixesToDirectConnectGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalId")
    public String proposalId;
    public DirectConnectGatewayAssociationProposal withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalState")
    public DirectConnectGatewayAssociationProposalStateEnum proposalState;
    public DirectConnectGatewayAssociationProposal withProposalState(DirectConnectGatewayAssociationProposalStateEnum proposalState) {
        this.proposalState = proposalState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedAllowedPrefixesToDirectConnectGateway")
    public RouteFilterPrefix[] requestedAllowedPrefixesToDirectConnectGateway;
    public DirectConnectGatewayAssociationProposal withRequestedAllowedPrefixesToDirectConnectGateway(RouteFilterPrefix[] requestedAllowedPrefixesToDirectConnectGateway) {
        this.requestedAllowedPrefixesToDirectConnectGateway = requestedAllowedPrefixesToDirectConnectGateway;
        return this;
    }
}