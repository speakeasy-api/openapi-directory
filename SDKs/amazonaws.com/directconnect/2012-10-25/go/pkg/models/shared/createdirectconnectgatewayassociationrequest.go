package shared

type CreateDirectConnectGatewayAssociationRequest struct {
	AddAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix    `json:"addAllowedPrefixesToDirectConnectGateway,omitempty"`
	DirectConnectGatewayID                   map[string]interface{} `json:"directConnectGatewayId"`
	GatewayID                                *string                `json:"gatewayId,omitempty"`
	VirtualGatewayID                         *string                `json:"virtualGatewayId,omitempty"`
}
