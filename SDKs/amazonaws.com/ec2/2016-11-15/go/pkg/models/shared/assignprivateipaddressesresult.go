package shared

type AssignPrivateIPAddressesResult struct {
	AssignedIpv4Prefixes       map[string]interface{}
	AssignedPrivateIPAddresses map[string]interface{}
	NetworkInterfaceID         map[string]interface{}
}
