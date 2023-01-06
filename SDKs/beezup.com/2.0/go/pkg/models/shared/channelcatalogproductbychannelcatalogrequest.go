package shared

type ChannelCatalogProductByChannelCatalogRequest struct {
	ChannelCatalogIds []string `json:"channelCatalogIds"`
	ProductID         string   `json:"productId"`
	StoreID           string   `json:"storeId"`
}
