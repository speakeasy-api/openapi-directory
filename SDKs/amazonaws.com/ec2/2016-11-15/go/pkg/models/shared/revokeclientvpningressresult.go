package shared

// RevokeClientVpnIngressResultStatus
// The current state of the authorization rule.
type RevokeClientVpnIngressResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type RevokeClientVpnIngressResult struct {
	Status *RevokeClientVpnIngressResultStatus
}
