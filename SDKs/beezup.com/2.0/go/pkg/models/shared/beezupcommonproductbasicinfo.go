// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// BeezUPCommonProductBasicInfo - The basic information related to a product
type BeezUPCommonProductBasicInfo struct {
	// Indicates if the product still exists in your catalog
	ProductExists bool `json:"productExists"`
	// The product identifier
	ProductID string `json:"productId"`
	// The product image Url
	ProductImageURL *string `json:"productImageUrl,omitempty"`
	// The product SKU
	ProductSku string `json:"productSku"`
	// The product tile
	ProductTitle string `json:"productTitle"`
}
