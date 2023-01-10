package shared

// CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation
// Information about the association.
type CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation struct {
	LocalGatewayID                         map[string]interface{}
	LocalGatewayRouteTableArn              map[string]interface{}
	LocalGatewayRouteTableID               map[string]interface{}
	LocalGatewayRouteTableVpcAssociationID map[string]interface{}
	OwnerID                                map[string]interface{}
	State                                  map[string]interface{}
	Tags                                   map[string]interface{}
	VpcID                                  map[string]interface{}
}

type CreateLocalGatewayRouteTableVpcAssociationResult struct {
	LocalGatewayRouteTableVpcAssociation *CreateLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation
}
