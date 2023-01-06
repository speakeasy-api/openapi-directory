package shared

type MarketplaceChannelCatalogPublicationOption struct {
	FeedType      FeedTypeEnum                `json:"feedType"`
	Kind          PublicationStrategyKindEnum `json:"kind"`
	Link          map[string]interface{}      `json:"link"`
	Strategy      string                      `json:"strategy"`
	WithUnpublish bool                        `json:"withUnpublish"`
}
