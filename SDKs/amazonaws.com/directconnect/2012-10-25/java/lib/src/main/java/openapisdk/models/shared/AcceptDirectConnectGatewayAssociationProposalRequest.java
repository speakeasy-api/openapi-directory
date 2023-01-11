package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptDirectConnectGatewayAssociationProposalRequest {
    @JsonProperty("associatedGatewayOwnerAccount")
    public String associatedGatewayOwnerAccount;
    public AcceptDirectConnectGatewayAssociationProposalRequest withAssociatedGatewayOwnerAccount(String associatedGatewayOwnerAccount) {
        this.associatedGatewayOwnerAccount = associatedGatewayOwnerAccount;
        return this;
    }
    @JsonProperty("directConnectGatewayId")
    public String directConnectGatewayId;
    public AcceptDirectConnectGatewayAssociationProposalRequest withDirectConnectGatewayId(String directConnectGatewayId) {
        this.directConnectGatewayId = directConnectGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideAllowedPrefixesToDirectConnectGateway")
    public RouteFilterPrefix[] overrideAllowedPrefixesToDirectConnectGateway;
    public AcceptDirectConnectGatewayAssociationProposalRequest withOverrideAllowedPrefixesToDirectConnectGateway(RouteFilterPrefix[] overrideAllowedPrefixesToDirectConnectGateway) {
        this.overrideAllowedPrefixesToDirectConnectGateway = overrideAllowedPrefixesToDirectConnectGateway;
        return this;
    }
    @JsonProperty("proposalId")
    public String proposalId;
    public AcceptDirectConnectGatewayAssociationProposalRequest withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}