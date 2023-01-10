package shared

// DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources
// Information about the deregistered group sources.
type DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources struct {
	DeregisteredNetworkInterfaceIds map[string]interface{}
	GroupIPAddress                  map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type DeregisterTransitGatewayMulticastGroupSourcesResult struct {
	DeregisteredMulticastGroupSources *DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources
}
