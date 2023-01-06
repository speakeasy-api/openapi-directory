package shared

// CopyOptimisationResponse
// Products optimisatisation copied
type CopyOptimisationResponse struct {
	CatalogProductCount int64                        `json:"catalogProductCount"`
	Channel             BeezUpCommonChannelBasicInfo `json:"channel"`
	EnabledProductCount int64                        `json:"enabledProductCount"`
}
