package shared

// ChannelCatalog1
// The channel catalog
type ChannelCatalog1 struct {
	CategoryMappingSettings *ChannelCatalogCategoryMappingSettings `json:"categoryMappingSettings,omitempty"`
	ChannelCatalogID        string                                 `json:"channelCatalogId"`
	ChannelCategorySettings ChannelCategorySettings                `json:"channelCategorySettings"`
	ChannelCostSettings     ChannelCostSettings                    `json:"channelCostSettings"`
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
