package shared

// ReportByProductOneChannelLinks
// If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
type ReportByProductOneChannelLinks struct {
	DisableProductForOneChannel map[string]interface{} `json:"disableProductForOneChannel"`
	EnableProductForOneChannel  map[string]interface{} `json:"enableProductForOneChannel"`
	ProductInfo                 map[string]interface{} `json:"productInfo"`
}
