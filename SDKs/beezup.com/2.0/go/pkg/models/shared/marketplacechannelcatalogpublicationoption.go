package shared

type MarketplaceChannelCatalogPublicationOption struct {
	FeedType      FeedTypeEnum                         `json:"feedType"`
	Kind          PublicationStrategyKindEnum          `json:"kind"`
	Link          LinksPublishCatalogToMarketplaceLink `json:"link"`
	Strategy      string                               `json:"strategy"`
	WithUnpublish bool                                 `json:"withUnpublish"`
}
