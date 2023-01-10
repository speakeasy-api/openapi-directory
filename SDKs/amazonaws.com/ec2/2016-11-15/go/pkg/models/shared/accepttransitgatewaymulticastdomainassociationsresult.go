package shared

// AcceptTransitGatewayMulticastDomainAssociationsResultAssociations
// Describes the multicast domain associations.
type AcceptTransitGatewayMulticastDomainAssociationsResultAssociations struct {
	ResourceID                      map[string]interface{}
	ResourceOwnerID                 map[string]interface{}
	ResourceType                    map[string]interface{}
	Subnets                         map[string]interface{}
	TransitGatewayAttachmentID      map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type AcceptTransitGatewayMulticastDomainAssociationsResult struct {
	Associations *AcceptTransitGatewayMulticastDomainAssociationsResultAssociations
}
