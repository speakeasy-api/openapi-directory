package shared

// GatewayRouteData1
// An object that represents a gateway route returned by a describe operation.
type GatewayRouteData1 struct {
	GatewayRouteName   string             `json:"gatewayRouteName"`
	MeshName           string             `json:"meshName"`
	Metadata           ResourceMetadata   `json:"metadata"`
	Spec               GatewayRouteSpec1  `json:"spec"`
	Status             GatewayRouteStatus `json:"status"`
	VirtualGatewayName string             `json:"virtualGatewayName"`
}
