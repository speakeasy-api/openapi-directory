package shared

// GrpcGatewayRoute1
// An object that represents a gRPC gateway route.
type GrpcGatewayRoute1 struct {
	Action GrpcGatewayRouteAction1 `json:"action"`
	Match  GrpcGatewayRouteMatch   `json:"match"`
}
