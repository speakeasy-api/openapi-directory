package shared

// DisassociateTransitGatewayMulticastDomainResultAssociations
// Information about the association.
type DisassociateTransitGatewayMulticastDomainResultAssociations struct {
	ResourceID                      map[string]interface{}
	ResourceOwnerID                 map[string]interface{}
	ResourceType                    map[string]interface{}
	Subnets                         map[string]interface{}
	TransitGatewayAttachmentID      map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type DisassociateTransitGatewayMulticastDomainResult struct {
	Associations *DisassociateTransitGatewayMulticastDomainResultAssociations
}
