package shared

// CreateLocalGatewayRouteResultRoute
// Information about the route.
type CreateLocalGatewayRouteResultRoute struct {
	DestinationCidrBlock                map[string]interface{}
	LocalGatewayRouteTableArn           map[string]interface{}
	LocalGatewayRouteTableID            map[string]interface{}
	LocalGatewayVirtualInterfaceGroupID map[string]interface{}
	OwnerID                             map[string]interface{}
	State                               map[string]interface{}
	Type                                map[string]interface{}
}

type CreateLocalGatewayRouteResult struct {
	Route *CreateLocalGatewayRouteResultRoute
}
