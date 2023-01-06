package shared

// PublishCatalogToMarketplaceRequest
// Publish the catalog to the marketplace
type PublishCatalogToMarketplaceRequest struct {
	FeedType                FeedTypeEnum                `json:"feedType"`
	PublicationStrategyKind PublicationStrategyKindEnum `json:"publicationStrategyKind"`
	WithUnpublish           bool                        `json:"withUnpublish"`
}
