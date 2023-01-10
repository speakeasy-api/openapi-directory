package shared

// EnableTransitGatewayRouteTablePropagationResultPropagation
// Information about route propagation.
type EnableTransitGatewayRouteTablePropagationResultPropagation struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayRouteTableID map[string]interface{}
}

type EnableTransitGatewayRouteTablePropagationResult struct {
	Propagation *EnableTransitGatewayRouteTablePropagationResultPropagation
}
