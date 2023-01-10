package shared

// ProvisionByoipCidrResultByoipCidr
// Information about the address range.
type ProvisionByoipCidrResultByoipCidr struct {
	Cidr          map[string]interface{}
	Description   map[string]interface{}
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

type ProvisionByoipCidrResult struct {
	ByoipCidr *ProvisionByoipCidrResultByoipCidr
}
