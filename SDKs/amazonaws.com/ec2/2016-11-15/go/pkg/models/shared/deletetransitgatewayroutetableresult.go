package shared

// DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable
// Information about the deleted transit gateway route table.
type DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable struct {
	CreationTime                 map[string]interface{}
	DefaultAssociationRouteTable map[string]interface{}
	DefaultPropagationRouteTable map[string]interface{}
	State                        map[string]interface{}
	Tags                         map[string]interface{}
	TransitGatewayID             map[string]interface{}
	TransitGatewayRouteTableID   map[string]interface{}
}

type DeleteTransitGatewayRouteTableResult struct {
	TransitGatewayRouteTable *DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable
}
