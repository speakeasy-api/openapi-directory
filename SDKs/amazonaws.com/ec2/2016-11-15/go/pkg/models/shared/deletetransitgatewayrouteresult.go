package shared

// DeleteTransitGatewayRouteResultRoute
// Information about the route.
type DeleteTransitGatewayRouteResultRoute struct {
	DestinationCidrBlock      map[string]interface{}
	PrefixListID              map[string]interface{}
	State                     map[string]interface{}
	TransitGatewayAttachments map[string]interface{}
	Type                      map[string]interface{}
}

type DeleteTransitGatewayRouteResult struct {
	Route *DeleteTransitGatewayRouteResultRoute
}
