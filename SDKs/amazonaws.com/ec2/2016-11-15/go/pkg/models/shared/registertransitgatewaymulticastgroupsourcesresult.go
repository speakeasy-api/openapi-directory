package shared

// RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources
// Information about the transit gateway multicast group sources.
type RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources struct {
	GroupIPAddress                  map[string]interface{}
	RegisteredNetworkInterfaceIds   map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type RegisterTransitGatewayMulticastGroupSourcesResult struct {
	RegisteredMulticastGroupSources *RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources
}
