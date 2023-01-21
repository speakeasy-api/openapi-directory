package shared

// SortDefinition
// The details of how to sort the data.
type SortDefinition struct {
	Key       string         `json:"Key"`
	SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
}
