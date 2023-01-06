package shared

// MarketplaceChannelCatalog
// This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
type MarketplaceChannelCatalog struct {
	APISettingsStatus               BeezUpCommonAPISettingsStatusEnum `json:"apiSettingsStatus"`
	BeezUPChannelCatalogID          string                            `json:"beezUPChannelCatalogId"`
	BeezUPChannelID                 string                            `json:"beezUPChannelId"`
	BeezUPMarketplaceName           interface{}                       `json:"beezUPMarketplaceName"`
	BeezUPStoreID                   string                            `json:"beezUPStoreId"`
	BeezUPStoreName                 string                            `json:"beezUPStoreName"`
	Enabled                         bool                              `json:"enabled"`
	Links                           MarketplaceChannelCatalogLinks    `json:"links"`
	LovLinks                        MarketplaceChannelCatalogLovLinks `json:"lovLinks"`
	MarketplaceAccountID            *int32                            `json:"marketplaceAccountId,omitempty"`
	MarketplaceBusinessCode         string                            `json:"marketplaceBusinessCode"`
	MarketplaceIsoCountryCodeAlpha2 string                            `json:"marketplaceIsoCountryCodeAlpha2"`
	MarketplaceMarketPlaceID        string                            `json:"marketplaceMarketPlaceId"`
	MarketplaceMerchantIdentifiers  map[string]string                 `json:"marketplaceMerchantIdentifiers,omitempty"`
	MarketplaceTechnicalCode        string                            `json:"marketplaceTechnicalCode"`
}
