package shared

// VariableModelInfo
// Internal usage: Old offer type. Describe the fix and variable model information
type VariableModelInfo struct {
	ClickIncludedAndVariablePrices []ClickIncludedAndVariablePrice `json:"clickIncludedAndVariablePrices"`
	OverflowClickCount             int32                           `json:"overflowClickCount"`
	OverflowClickPrice             float64                         `json:"overflowClickPrice"`
}
