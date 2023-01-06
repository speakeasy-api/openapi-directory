package shared

// GetProductsRequest
// The request message to get products based on these filters
type GetProductsRequest struct {
	CategoryPath           []string `json:"categoryPath,omitempty"`
	ColumnIDList           []string `json:"columnIdList,omitempty"`
	Ean                    *string  `json:"ean,omitempty"`
	Exists                 *bool    `json:"exists,omitempty"`
	Mpn                    *string  `json:"mpn,omitempty"`
	OrderByCatalogColumnID *string  `json:"orderByCatalogColumnId,omitempty"`
	PageNumber             int32    `json:"pageNumber"`
	PageSize               int32    `json:"pageSize"`
	ProductIDList          []string `json:"productIdList,omitempty"`
	Sku                    *string  `json:"sku,omitempty"`
	Title                  *string  `json:"title,omitempty"`
	WithoutSubCategories   *bool    `json:"withoutSubCategories,omitempty"`
}
