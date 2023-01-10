package shared

// AdvertiseByoipCidrResultByoipCidr
// Information about the address range.
type AdvertiseByoipCidrResultByoipCidr struct {
	Cidr          map[string]interface{}
	Description   map[string]interface{}
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

type AdvertiseByoipCidrResult struct {
	ByoipCidr *AdvertiseByoipCidrResultByoipCidr
}
