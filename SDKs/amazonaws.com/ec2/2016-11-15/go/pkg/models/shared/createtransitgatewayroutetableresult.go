package shared

// CreateTransitGatewayRouteTableResultTransitGatewayRouteTable
// Information about the transit gateway route table.
type CreateTransitGatewayRouteTableResultTransitGatewayRouteTable struct {
	CreationTime                 map[string]interface{}
	DefaultAssociationRouteTable map[string]interface{}
	DefaultPropagationRouteTable map[string]interface{}
	State                        map[string]interface{}
	Tags                         map[string]interface{}
	TransitGatewayID             map[string]interface{}
	TransitGatewayRouteTableID   map[string]interface{}
}

type CreateTransitGatewayRouteTableResult struct {
	TransitGatewayRouteTable *CreateTransitGatewayRouteTableResultTransitGatewayRouteTable
}
