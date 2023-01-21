package shared

type LinkedTaxRate struct {
	Code *string `json:"code,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type LinkedTaxRateInput struct {
	ID *string `json:"id,omitempty"`
}
