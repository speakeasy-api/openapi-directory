package shared

// GrpcGatewayRouteAction1
// An object that represents the action to take if a match is determined.
type GrpcGatewayRouteAction1 struct {
	Rewrite *GrpcGatewayRouteRewrite1 `json:"rewrite,omitempty"`
	Target  GatewayRouteTarget        `json:"target"`
}
