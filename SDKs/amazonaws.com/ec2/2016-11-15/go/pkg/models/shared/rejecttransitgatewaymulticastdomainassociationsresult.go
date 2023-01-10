package shared

// RejectTransitGatewayMulticastDomainAssociationsResultAssociations
// Describes the multicast domain associations.
type RejectTransitGatewayMulticastDomainAssociationsResultAssociations struct {
	ResourceID                      map[string]interface{}
	ResourceOwnerID                 map[string]interface{}
	ResourceType                    map[string]interface{}
	Subnets                         map[string]interface{}
	TransitGatewayAttachmentID      map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type RejectTransitGatewayMulticastDomainAssociationsResult struct {
	Associations *RejectTransitGatewayMulticastDomainAssociationsResultAssociations
}
