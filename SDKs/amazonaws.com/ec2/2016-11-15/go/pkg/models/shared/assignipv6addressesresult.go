package shared

type AssignIpv6AddressesResult struct {
	AssignedIpv6Addresses map[string]interface{}
	AssignedIpv6Prefixes  map[string]interface{}
	NetworkInterfaceID    map[string]interface{}
}
