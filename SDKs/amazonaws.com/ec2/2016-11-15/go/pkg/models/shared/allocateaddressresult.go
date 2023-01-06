package shared

type AllocateAddressResult struct {
	AllocationID          map[string]interface{}
	CarrierIP             map[string]interface{}
	CustomerOwnedIP       map[string]interface{}
	CustomerOwnedIpv4Pool map[string]interface{}
	Domain                map[string]interface{}
	NetworkBorderGroup    map[string]interface{}
	PublicIP              map[string]interface{}
	PublicIpv4Pool        map[string]interface{}
}
