package shared

// FixedAndVariableClickModelInfo
// Internal usage: Old offer type. Describe the fix and variable model information
type FixedAndVariableClickModelInfo struct {
	ClickIncludedAndAdditionalClickPrices []ClickIncludedAndAdditionalClickPrice `json:"clickIncludedAndAdditionalClickPrices"`
}
