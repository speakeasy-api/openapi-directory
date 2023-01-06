package shared

// TrackedOrderProduct
// The basic information related to a product
type TrackedOrderProduct struct {
	Margin    float64 `json:"margin"`
	Quantity  float64 `json:"quantity"`
	UnitPrice float64 `json:"unitPrice"`
}
