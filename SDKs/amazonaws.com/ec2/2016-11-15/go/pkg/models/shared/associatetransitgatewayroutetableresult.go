package shared

// AssociateTransitGatewayRouteTableResultAssociation
// The ID of the association.
type AssociateTransitGatewayRouteTableResultAssociation struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
	TransitGatewayRouteTableID map[string]interface{}
}

type AssociateTransitGatewayRouteTableResult struct {
	Association *AssociateTransitGatewayRouteTableResultAssociation
}
