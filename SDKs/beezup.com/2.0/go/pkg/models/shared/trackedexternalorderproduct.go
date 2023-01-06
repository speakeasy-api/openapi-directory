package shared

type TrackedExternalOrderProduct struct {
	Margin          *string `json:"margin,omitempty"`
	ProductActive   *bool   `json:"productActive,omitempty"`
	ProductID       *string `json:"productId,omitempty"`
	ProductImageURL *string `json:"productImageUrl,omitempty"`
	ProductSku      string  `json:"productSku"`
	ProductTitle    *string `json:"productTitle,omitempty"`
	Quantity        *string `json:"quantity,omitempty"`
	UnitPrice       *string `json:"unitPrice,omitempty"`
}
