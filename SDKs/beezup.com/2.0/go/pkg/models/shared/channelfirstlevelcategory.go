package shared

// ChannelFirstLevelCategory
// The first level category with his sub categories
type ChannelFirstLevelCategory struct {
	ChannelCategoryChannelCode     *string                                  `json:"channelCategoryChannelCode,omitempty"`
	ChannelCategoryColumnOverrides map[string]ChannelCategoryColumnOverride `json:"channelCategoryColumnOverrides,omitempty"`
	ChannelCategoryDefaultCost     *float64                                 `json:"channelCategoryDefaultCost,omitempty"`
	ChannelCategoryID              string                                   `json:"channelCategoryId"`
	ChannelCategoryLevel           int32                                    `json:"channelCategoryLevel"`
	ChannelCategoryName            string                                   `json:"channelCategoryName"`
	SubCategories                  []ChannelCategory                        `json:"subCategories,omitempty"`
}
