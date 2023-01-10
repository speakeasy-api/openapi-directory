package shared

// WithdrawByoipCidrResultByoipCidr
// Information about the address pool.
type WithdrawByoipCidrResultByoipCidr struct {
	Cidr          map[string]interface{}
	Description   map[string]interface{}
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

type WithdrawByoipCidrResult struct {
	ByoipCidr *WithdrawByoipCidrResultByoipCidr
}
