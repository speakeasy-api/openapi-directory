package shared

// DisassociateClientVpnTargetNetworkResultStatus
// The current state of the target network association.
type DisassociateClientVpnTargetNetworkResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type DisassociateClientVpnTargetNetworkResult struct {
	AssociationID map[string]interface{}
	Status        *DisassociateClientVpnTargetNetworkResultStatus
}
