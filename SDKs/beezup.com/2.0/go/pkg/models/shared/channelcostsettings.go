package shared

// ChannelCostSettings
// Indicate the default configuration of the cost on this channel.
type ChannelCostSettings struct {
	CostType        CostTypeEnum `json:"costType"`
	GlobalCostValue *float64     `json:"globalCostValue,omitempty"`
}
