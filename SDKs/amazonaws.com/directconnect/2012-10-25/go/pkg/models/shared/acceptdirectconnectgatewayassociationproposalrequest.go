package shared

type AcceptDirectConnectGatewayAssociationProposalRequest struct {
	AssociatedGatewayOwnerAccount                 string                 `json:"associatedGatewayOwnerAccount"`
	DirectConnectGatewayID                        string                 `json:"directConnectGatewayId"`
	OverrideAllowedPrefixesToDirectConnectGateway map[string]interface{} `json:"overrideAllowedPrefixesToDirectConnectGateway,omitempty"`
	ProposalID                                    string                 `json:"proposalId"`
}
