package shared

// SavingsPlansSavings
// The amount of savings that you're accumulating, against the public On-Demand rate of the usage accrued in an account.
type SavingsPlansSavings struct {
	NetSavings             *string `json:"NetSavings,omitempty"`
	OnDemandCostEquivalent *string `json:"OnDemandCostEquivalent,omitempty"`
}
