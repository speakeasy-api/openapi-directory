package shared

// DateFilter
// A date filter for querying findings.
type DateFilter struct {
	DateRange *DateRange             `json:"DateRange,omitempty"`
	End       *string                `json:"End,omitempty"`
	Start     map[string]interface{} `json:"Start,omitempty"`
}
