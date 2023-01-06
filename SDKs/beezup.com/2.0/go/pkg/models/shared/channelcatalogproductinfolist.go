package shared

// ChannelCatalogProductInfoList
// The channel catalog product info list
type ChannelCatalogProductInfoList struct {
	Links            ChannelCatalogProductInfoListLinks `json:"links"`
	PaginationResult BeezUpCommonPaginationResult       `json:"paginationResult"`
	ProductInfos     []ChannelCatalogProductInfo        `json:"productInfos"`
}
