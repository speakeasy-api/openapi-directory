package shared

// DeprovisionByoipCidrResultByoipCidr
// Information about the address range.
type DeprovisionByoipCidrResultByoipCidr struct {
	Cidr          map[string]interface{}
	Description   map[string]interface{}
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

type DeprovisionByoipCidrResult struct {
	ByoipCidr *DeprovisionByoipCidrResultByoipCidr
}
