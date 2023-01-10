package shared

// DeleteClientVpnRouteResultStatus
// The current state of the route.
type DeleteClientVpnRouteResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type DeleteClientVpnRouteResult struct {
	Status *DeleteClientVpnRouteResultStatus
}
