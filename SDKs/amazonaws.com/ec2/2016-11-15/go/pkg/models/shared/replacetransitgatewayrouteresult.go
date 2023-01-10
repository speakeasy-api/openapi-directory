package shared

// ReplaceTransitGatewayRouteResultRoute
// Information about the modified route.
type ReplaceTransitGatewayRouteResultRoute struct {
	DestinationCidrBlock      map[string]interface{}
	PrefixListID              map[string]interface{}
	State                     map[string]interface{}
	TransitGatewayAttachments map[string]interface{}
	Type                      map[string]interface{}
}

type ReplaceTransitGatewayRouteResult struct {
	Route *ReplaceTransitGatewayRouteResultRoute
}
