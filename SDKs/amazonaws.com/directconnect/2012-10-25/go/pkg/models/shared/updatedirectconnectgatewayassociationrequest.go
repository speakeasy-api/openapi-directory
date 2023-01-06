package shared

type UpdateDirectConnectGatewayAssociationRequest struct {
	AddAllowedPrefixesToDirectConnectGateway    []RouteFilterPrefix    `json:"addAllowedPrefixesToDirectConnectGateway,omitempty"`
	AssociationID                               map[string]interface{} `json:"associationId,omitempty"`
	RemoveAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix    `json:"removeAllowedPrefixesToDirectConnectGateway,omitempty"`
}
