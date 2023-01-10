package shared

// ChannelCatalog
// The channel catalog
type ChannelCatalog struct {
	CategoryMappingSettings *ChannelCatalogCategoryMappingSettings `json:"categoryMappingSettings,omitempty"`
	ChannelCatalogID        string                                 `json:"channelCatalogId"`
	ChannelCategorySettings ChannelCategorySettings                `json:"channelCategorySettings"`
	ChannelCostSettings     ChannelCostSettings                    `json:"channelCostSettings"`
	ChannelID               string                                 `json:"channelId"`
	ChannelImageURL         string                                 `json:"channelImageUrl"`
	ChannelName             string                                 `json:"channelName"`
	ColumnMappings          []ChannelCatalogColumnMappingWithName  `json:"columnMappings,omitempty"`
	CostSettings            *CostSettings                          `json:"costSettings,omitempty"`
	Enabled                 bool                                   `json:"enabled"`
	ExclusionFilters        []ExclusionFilter                      `json:"exclusionFilters,omitempty"`
	ExportURL               *string                                `json:"exportUrl,omitempty"`
	GeneralSettings         GeneralSettings                        `json:"generalSettings"`
	IsMarketplace           bool                                   `json:"isMarketplace"`
	Links                   ChannelCatalogLinks                    `json:"links"`
	State                   ChannelCatalogState                    `json:"state"`
	StoreID                 string                                 `json:"storeId"`
	Types                   []string                               `json:"types"`
}
