package shared

// ReportByProductOneChannelLinks
// If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
type ReportByProductOneChannelLinks struct {
	DisableProductForOneChannel LinksOptimiseByProductLink            `json:"disableProductForOneChannel"`
	EnableProductForOneChannel  LinksOptimiseByProductLink            `json:"enableProductForOneChannel"`
	ProductInfo                 LinksGetChannelCatalogProductInfoLink `json:"productInfo"`
}
