package shared

// DeleteClientVpnEndpointResultStatus
// The current state of the Client VPN endpoint.
type DeleteClientVpnEndpointResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type DeleteClientVpnEndpointResult struct {
	Status *DeleteClientVpnEndpointResultStatus
}
