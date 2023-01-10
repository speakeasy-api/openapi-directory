package shared

type CustomColumnListLinks struct {
	Add  *LinksCatalogSaveCustomColumnLink `json:"add,omitempty"`
	Self LinksCatalogGetCustomColumnsLink  `json:"self"`
}
