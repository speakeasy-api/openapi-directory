package shared

// CreateClientVpnEndpointResultStatus
// The current state of the Client VPN endpoint.
type CreateClientVpnEndpointResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type CreateClientVpnEndpointResult struct {
	ClientVpnEndpointID map[string]interface{}
	DNSName             map[string]interface{}
	Status              *CreateClientVpnEndpointResultStatus
}
