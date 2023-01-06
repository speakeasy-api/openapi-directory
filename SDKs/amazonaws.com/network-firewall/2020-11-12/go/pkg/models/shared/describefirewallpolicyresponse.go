package shared

type DescribeFirewallPolicyResponse struct {
	FirewallPolicy         *FirewallPolicy1       `json:"FirewallPolicy,omitempty"`
	FirewallPolicyResponse FirewallPolicyResponse `json:"FirewallPolicyResponse"`
	UpdateToken            string                 `json:"UpdateToken"`
}
