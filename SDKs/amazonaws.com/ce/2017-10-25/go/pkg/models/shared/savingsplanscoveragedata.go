package shared

// SavingsPlansCoverageData
// Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.
type SavingsPlansCoverageData struct {
	CoveragePercentage         *string `json:"CoveragePercentage,omitempty"`
	OnDemandCost               *string `json:"OnDemandCost,omitempty"`
	SpendCoveredBySavingsPlans *string `json:"SpendCoveredBySavingsPlans,omitempty"`
	TotalCost                  *string `json:"TotalCost,omitempty"`
}
