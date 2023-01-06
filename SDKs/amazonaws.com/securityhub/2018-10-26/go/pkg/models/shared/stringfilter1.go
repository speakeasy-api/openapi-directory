package shared

// StringFilter1
// A string filter for querying findings.
type StringFilter1 struct {
	Comparison map[string]interface{} `json:"Comparison,omitempty"`
	Value      *string                `json:"Value,omitempty"`
}
