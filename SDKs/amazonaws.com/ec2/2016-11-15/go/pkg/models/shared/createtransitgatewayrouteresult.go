package shared

// CreateTransitGatewayRouteResultRoute
// Information about the route.
type CreateTransitGatewayRouteResultRoute struct {
	DestinationCidrBlock      map[string]interface{}
	PrefixListID              map[string]interface{}
	State                     map[string]interface{}
	TransitGatewayAttachments map[string]interface{}
	Type                      map[string]interface{}
}

type CreateTransitGatewayRouteResult struct {
	Route *CreateTransitGatewayRouteResultRoute
}
