package shared

// DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers
// Information about the deregistered members.
type DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers struct {
	DeregisteredNetworkInterfaceIds map[string]interface{}
	GroupIPAddress                  map[string]interface{}
	TransitGatewayMulticastDomainID map[string]interface{}
}

type DeregisterTransitGatewayMulticastGroupMembersResult struct {
	DeregisteredMulticastGroupMembers *DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers
}
