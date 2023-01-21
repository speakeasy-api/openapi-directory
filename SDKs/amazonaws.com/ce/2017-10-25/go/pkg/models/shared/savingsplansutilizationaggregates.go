package shared

// SavingsPlansUtilizationAggregates
// The aggregated utilization metrics for your Savings Plans usage.
type SavingsPlansUtilizationAggregates struct {
	AmortizedCommitment *SavingsPlansAmortizedCommitment `json:"AmortizedCommitment,omitempty"`
	Savings             *SavingsPlansSavings             `json:"Savings,omitempty"`
	Utilization         SavingsPlansUtilization          `json:"Utilization"`
}
