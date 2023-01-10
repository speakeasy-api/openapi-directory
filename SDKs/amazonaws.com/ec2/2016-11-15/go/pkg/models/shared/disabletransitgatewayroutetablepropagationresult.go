package shared

// DisableTransitGatewayRouteTablePropagationResultPropagation
// Information about route propagation.
type DisableTransitGatewayRouteTablePropagationResultPropagation struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayRouteTableID map[string]interface{}
}

type DisableTransitGatewayRouteTablePropagationResult struct {
	Propagation *DisableTransitGatewayRouteTablePropagationResultPropagation
}
