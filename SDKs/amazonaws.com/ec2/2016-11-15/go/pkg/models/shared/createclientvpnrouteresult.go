package shared

// CreateClientVpnRouteResultStatus
// The current state of the route.
type CreateClientVpnRouteResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type CreateClientVpnRouteResult struct {
	Status *CreateClientVpnRouteResultStatus
}
