package shared

// DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
// The options for the transit gateway multicast domain.
type DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions struct {
	AutoAcceptSharedAssociations map[string]interface{}
	Igmpv2Support                map[string]interface{}
	StaticSourcesSupport         map[string]interface{}
}

// DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
// Information about the deleted transit gateway multicast domain.
type DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain struct {
	CreationTime                     map[string]interface{}
	Options                          *DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
	OwnerID                          map[string]interface{}
	State                            map[string]interface{}
	Tags                             map[string]interface{}
	TransitGatewayID                 map[string]interface{}
	TransitGatewayMulticastDomainArn map[string]interface{}
	TransitGatewayMulticastDomainID  map[string]interface{}
}

type DeleteTransitGatewayMulticastDomainResult struct {
	TransitGatewayMulticastDomain *DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
}
