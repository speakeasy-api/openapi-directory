package shared

type ChannelCatalogMarketplaceProperties struct {
	Info           *BeezUpCommonInfoSummaries               `json:"info,omitempty"`
	Links          ChannelCatalogMarketplacePropertiesLinks `json:"links"`
	PropertyGroups []interface{}                            `json:"propertyGroups"`
}
