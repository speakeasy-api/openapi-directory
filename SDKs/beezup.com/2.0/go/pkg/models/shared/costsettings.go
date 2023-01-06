package shared

// CostSettings
// If this property is not indicated please force the user to configure the cost settings.
// Defines the cost type you have on this channel with the cost value.
type CostSettings struct {
	CostType        CostTypeEnum `json:"costType"`
	GlobalCostValue *float64     `json:"globalCostValue,omitempty"`
}
