package shared

// AssociateClientVpnTargetNetworkResultStatus
// The current state of the target network association.
type AssociateClientVpnTargetNetworkResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type AssociateClientVpnTargetNetworkResult struct {
	AssociationID map[string]interface{}
	Status        *AssociateClientVpnTargetNetworkResultStatus
}
