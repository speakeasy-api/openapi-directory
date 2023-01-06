package shared

// SetDimension1
// Specifies the dimension type and values for a segment dimension.
type SetDimension1 struct {
	DimensionType map[string]interface{} `json:"DimensionType,omitempty"`
	Values        []string               `json:"Values"`
}
