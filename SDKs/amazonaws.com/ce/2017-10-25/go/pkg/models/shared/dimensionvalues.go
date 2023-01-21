package shared

// DimensionValues
// The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
type DimensionValues struct {
	Key          *DimensionEnum    `json:"Key,omitempty"`
	MatchOptions []MatchOptionEnum `json:"MatchOptions,omitempty"`
	Values       []string          `json:"Values,omitempty"`
}
