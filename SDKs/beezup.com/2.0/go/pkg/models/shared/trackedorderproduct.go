package shared

// TrackedOrderProduct
// The basic information related to a product
type TrackedOrderProduct struct {
	Margin          float64 `json:"margin"`
	ProductExists   bool    `json:"productExists"`
	ProductID       string  `json:"productId"`
	ProductImageURL string  `json:"productImageUrl"`
	ProductSku      string  `json:"productSku"`
	ProductTitle    string  `json:"productTitle"`
	Quantity        float64 `json:"quantity"`
	UnitPrice       float64 `json:"unitPrice"`
}
