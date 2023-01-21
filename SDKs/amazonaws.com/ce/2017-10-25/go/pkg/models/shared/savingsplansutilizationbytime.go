package shared

// SavingsPlansUtilizationByTime
// The amount of Savings Plans utilization, in hours.
type SavingsPlansUtilizationByTime struct {
	AmortizedCommitment *SavingsPlansAmortizedCommitment `json:"AmortizedCommitment,omitempty"`
	Savings             *SavingsPlansSavings             `json:"Savings,omitempty"`
	TimePeriod          DateInterval                     `json:"TimePeriod"`
	Utilization         SavingsPlansUtilization          `json:"Utilization"`
}
