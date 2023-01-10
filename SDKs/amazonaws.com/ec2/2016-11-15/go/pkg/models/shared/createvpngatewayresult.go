package shared

// CreateVpnGatewayResultVpnGateway
// Information about the virtual private gateway.
type CreateVpnGatewayResultVpnGateway struct {
	AmazonSideAsn    map[string]interface{}
	AvailabilityZone map[string]interface{}
	State            map[string]interface{}
	Tags             map[string]interface{}
	Type             map[string]interface{}
	VpcAttachments   map[string]interface{}
	VpnGatewayID     map[string]interface{}
}

// CreateVpnGatewayResult
// Contains the output of CreateVpnGateway.
type CreateVpnGatewayResult struct {
	VpnGateway *CreateVpnGatewayResultVpnGateway
}
