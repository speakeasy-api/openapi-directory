package shared

// CoverageCost
// How much it costs to run an instance.
type CoverageCost struct {
	OnDemandCost *string `json:"OnDemandCost,omitempty"`
}
