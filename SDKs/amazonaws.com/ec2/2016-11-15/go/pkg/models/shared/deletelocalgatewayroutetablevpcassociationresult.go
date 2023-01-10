package shared

// DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation
// Information about the association.
type DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation struct {
	LocalGatewayID                         map[string]interface{}
	LocalGatewayRouteTableArn              map[string]interface{}
	LocalGatewayRouteTableID               map[string]interface{}
	LocalGatewayRouteTableVpcAssociationID map[string]interface{}
	OwnerID                                map[string]interface{}
	State                                  map[string]interface{}
	Tags                                   map[string]interface{}
	VpcID                                  map[string]interface{}
}

type DeleteLocalGatewayRouteTableVpcAssociationResult struct {
	LocalGatewayRouteTableVpcAssociation *DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation
}
