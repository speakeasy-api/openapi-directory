package shared

// DisassociateTransitGatewayRouteTableResultAssociation
// Information about the association.
type DisassociateTransitGatewayRouteTableResultAssociation struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayRouteTableID map[string]interface{}
}

type DisassociateTransitGatewayRouteTableResult struct {
	Association *DisassociateTransitGatewayRouteTableResultAssociation
}
