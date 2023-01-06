package shared

// OriginRequestPolicyList
// A list of origin request policies.
type OriginRequestPolicyList struct {
	Items      []map[string]interface{}
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
