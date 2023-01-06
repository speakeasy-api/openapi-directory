package shared

type ClickIncludedAndVariablePrice struct {
	ClickIncluded *int32   `json:"clickIncluded,omitempty"`
	VariablePrice *float64 `json:"variablePrice,omitempty"`
}
