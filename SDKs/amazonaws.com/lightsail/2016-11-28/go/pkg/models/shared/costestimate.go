// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CostEstimate - Describes the estimated cost for resources in your Lightsail for Research account.
type CostEstimate struct {
	ResultsByTime []EstimateByTime `json:"resultsByTime,omitempty"`
	UsageType     *string          `json:"usageType,omitempty"`
}
