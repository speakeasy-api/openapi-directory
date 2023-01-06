package shared

type DocumentProductData struct {
	Comment       *string           `json:"comment,omitempty"`
	Name          string            `json:"name"`
	Quantity      float32           `json:"quantity"`
	Unit          string            `json:"unit"`
	UnitPrice     float32           `json:"unit_price"`
	UnitPriceType UnitPriceTypeEnum `json:"unit_price_type"`
	Vat           VatEnum           `json:"vat"`
}
