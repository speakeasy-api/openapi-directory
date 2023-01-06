package shared

// ChannelCatalogLinks
// Indicates the actions you can do on a channel catalog
type ChannelCatalogLinks struct {
	CategoryMappings         *LinksGetChannelCatalogCategoriesLink `json:"categoryMappings,omitempty"`
	ChannelInfo              map[string]interface{}                `json:"channelInfo,omitempty"`
	ConfigureColumnMappings  map[string]interface{}                `json:"configureColumnMappings,omitempty"`
	ConfigureCostSettings    map[string]interface{}                `json:"configureCostSettings,omitempty"`
	ConfigureGeneralSettings map[string]interface{}                `json:"configureGeneralSettings,omitempty"`
	Delete                   map[string]interface{}                `json:"delete,omitempty"`
	Disable                  map[string]interface{}                `json:"disable,omitempty"`
	DisableCategoryMappings  map[string]interface{}                `json:"disableCategoryMappings,omitempty"`
	Enable                   map[string]interface{}                `json:"enable,omitempty"`
	ExclusionFilters         map[string]interface{}                `json:"exclusionFilters,omitempty"`
	ExportationCacheInfo     map[string]interface{}                `json:"exportationCacheInfo,omitempty"`
	MarketplaceSettings      map[string]interface{}                `json:"marketplaceSettings,omitempty"`
	Products                 map[string]interface{}                `json:"products,omitempty"`
	ReenableCategoryMappings map[string]interface{}                `json:"reenableCategoryMappings,omitempty"`
	Self                     map[string]interface{}                `json:"self"`
}
