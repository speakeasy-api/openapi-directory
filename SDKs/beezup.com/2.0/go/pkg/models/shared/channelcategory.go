package shared

// ChannelCategory
// The channel category
type ChannelCategory struct {
	ChannelCategoryChannelCode     *string                                  `json:"channelCategoryChannelCode,omitempty"`
	ChannelCategoryColumnOverrides map[string]ChannelCategoryColumnOverride `json:"channelCategoryColumnOverrides,omitempty"`
	ChannelCategoryDefaultCost     *float64                                 `json:"channelCategoryDefaultCost,omitempty"`
	ChannelCategoryID              string                                   `json:"channelCategoryId"`
	ChannelCategoryLevel           int32                                    `json:"channelCategoryLevel"`
	ChannelCategoryPath            []string                                 `json:"channelCategoryPath"`
}
