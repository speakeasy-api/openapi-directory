package shared

// Policies
// The policies for a load balancer.
type Policies struct {
	AppCookieStickinessPolicies []AppCookieStickinessPolicy
	LBCookieStickinessPolicies  []LbCookieStickinessPolicy
	OtherPolicies               []string
}
