package shared

// AuthorizeClientVpnIngressResultStatus
// The current state of the authorization rule.
type AuthorizeClientVpnIngressResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type AuthorizeClientVpnIngressResult struct {
	Status *AuthorizeClientVpnIngressResultStatus
}
