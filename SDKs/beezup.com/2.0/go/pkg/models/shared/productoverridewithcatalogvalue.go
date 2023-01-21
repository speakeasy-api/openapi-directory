package shared

type ProductOverrideWithCatalogValue struct {
	CatalogValue *string `json:"catalogValue,omitempty"`
	Override     string  `json:"override"`
}
