package shared

// BeezUpCommonProductBasicInfo
// The basic information related to a product
type BeezUpCommonProductBasicInfo struct {
	ProductExists   bool    `json:"productExists"`
	ProductID       string  `json:"productId"`
	ProductImageURL *string `json:"productImageUrl,omitempty"`
	ProductSku      string  `json:"productSku"`
	ProductTitle    string  `json:"productTitle"`
}
