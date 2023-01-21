package shared

// SavingsPlansCoverage
// The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.
type SavingsPlansCoverage struct {
	Attributes map[string]string         `json:"Attributes,omitempty"`
	Coverage   *SavingsPlansCoverageData `json:"Coverage,omitempty"`
	TimePeriod *DateInterval             `json:"TimePeriod,omitempty"`
}
