package shared

// SavingsPlansUtilization
// The measurement of how well you're using your existing Savings Plans.
type SavingsPlansUtilization struct {
	TotalCommitment       *string `json:"TotalCommitment,omitempty"`
	UnusedCommitment      *string `json:"UnusedCommitment,omitempty"`
	UsedCommitment        *string `json:"UsedCommitment,omitempty"`
	UtilizationPercentage *string `json:"UtilizationPercentage,omitempty"`
}
