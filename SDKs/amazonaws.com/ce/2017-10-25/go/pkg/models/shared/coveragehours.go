package shared

// CoverageHours
// How long a running instance either used a reservation or was On-Demand.
type CoverageHours struct {
	CoverageHoursPercentage *string `json:"CoverageHoursPercentage,omitempty"`
	OnDemandHours           *string `json:"OnDemandHours,omitempty"`
	ReservedHours           *string `json:"ReservedHours,omitempty"`
	TotalRunningHours       *string `json:"TotalRunningHours,omitempty"`
}
