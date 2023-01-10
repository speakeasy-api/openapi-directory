package shared

// AssociateTransitGatewayMulticastDomainResultAssociations
// Information about the transit gateway multicast domain associations.
type AssociateTransitGatewayMulticastDomainResultAssociations struct {
	ResourceID                      map[string]interface{}
	ResourceOwnerID                 map[string]interface{}
	ResourceType                    map[string]interface{}
	Subnets                         map[string]interface{}
	TransitGatewayAttachmentID      map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type AssociateTransitGatewayMulticastDomainResult struct {
	Associations *AssociateTransitGatewayMulticastDomainResultAssociations
}
