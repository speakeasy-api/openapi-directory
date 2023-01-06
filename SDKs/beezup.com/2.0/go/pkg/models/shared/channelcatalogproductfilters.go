package shared

type ChannelCatalogProductFilters struct {
	AdditionalProductFilters map[string]BeezUpCommonAdditionalProductFiltersValue `json:"additionalProductFilters,omitempty"`
	CatalogEans              []string                                             `json:"catalogEans,omitempty"`
	CatalogMpns              []string                                             `json:"catalogMpns,omitempty"`
	CatalogSkus              []string                                             `json:"catalogSkus,omitempty"`
	ChannelEans              []string                                             `json:"channelEans,omitempty"`
	ChannelMpns              []string                                             `json:"channelMpns,omitempty"`
	ChannelSkus              []string                                             `json:"channelSkus,omitempty"`
	Title                    *string                                              `json:"title,omitempty"`
}
