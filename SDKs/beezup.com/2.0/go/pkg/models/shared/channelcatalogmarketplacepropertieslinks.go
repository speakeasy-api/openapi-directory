package shared

type ChannelCatalogMarketplacePropertiesLinks struct {
	ExternalConfigurationPage *BeezUpCommonLink3                              `json:"externalConfigurationPage,omitempty"`
	Self                      LinksGetChannelCatalogMarketplacePropertiesLink `json:"self"`
	Settings                  *LinksGetChannelCatalogMarketplaceSettingsLink  `json:"settings,omitempty"`
}
