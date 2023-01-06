package shared

// DateFilter1
// A date filter for querying findings.
type DateFilter1 struct {
	DateRange *DateRange `json:"DateRange,omitempty"`
	End       *string    `json:"End,omitempty"`
	Start     *string    `json:"Start,omitempty"`
}
