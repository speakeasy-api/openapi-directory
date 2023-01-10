package shared

// CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
// The options for the transit gateway multicast domain.
type CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions struct {
	AutoAcceptSharedAssociations map[string]interface{}
	Igmpv2Support                map[string]interface{}
	StaticSourcesSupport         map[string]interface{}
}

// CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
// Information about the transit gateway multicast domain.
type CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain struct {
	CreationTime                     map[string]interface{}
	Options                          *CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
	OwnerID                          map[string]interface{}
	State                            map[string]interface{}
	Tags                             map[string]interface{}
	TransitGatewayID                 map[string]interface{}
	TransitGatewayMulticastDomainArn map[string]interface{}
	TransitGatewayMulticastDomainID  map[string]interface{}
}

type CreateTransitGatewayMulticastDomainResult struct {
	TransitGatewayMulticastDomain *CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
}
