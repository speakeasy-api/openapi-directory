package shared

type UnassignIpv6AddressesResult struct {
	NetworkInterfaceID      map[string]interface{}
	UnassignedIpv6Addresses map[string]interface{}
	UnassignedIpv6Prefixes  map[string]interface{}
}
