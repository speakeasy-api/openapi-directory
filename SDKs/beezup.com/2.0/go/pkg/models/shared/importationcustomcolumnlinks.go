package shared

type ImportationCustomColumnLinks struct {
	Delete             LinksCatalogDeleteCustomColumnLink                     `json:"delete"`
	Expression         LinksCatalogGetCustomColumnExpressionLink              `json:"expression"`
	Map                *LinksImportationMapCustomColumnLink                   `json:"map,omitempty"`
	ProductSampleValue *LinksImportationGetProductSampleCustomColumnValueLink `json:"productSampleValue,omitempty"`
	Save               LinksImportationSaveCustomColumnLink                   `json:"save"`
	Unmap              *LinksImportationUnmapCustomColumnLink                 `json:"unmap,omitempty"`
}
