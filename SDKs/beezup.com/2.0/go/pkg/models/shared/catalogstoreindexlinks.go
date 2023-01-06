package shared

type CatalogStoreIndexLinks struct {
	AutoImportInfo     map[string]interface{} `json:"autoImportInfo,omitempty"`
	CatalogColumns     map[string]interface{} `json:"catalogColumns,omitempty"`
	Categories         map[string]interface{} `json:"categories,omitempty"`
	ComputeExpression  map[string]interface{} `json:"computeExpression,omitempty"`
	CustomColumns      map[string]interface{} `json:"customColumns,omitempty"`
	Importations       map[string]interface{} `json:"importations,omitempty"`
	InputConfiguration map[string]interface{} `json:"inputConfiguration,omitempty"`
	Products           map[string]interface{} `json:"products,omitempty"`
	RandomProducts     map[string]interface{} `json:"randomProducts,omitempty"`
	Self               map[string]interface{} `json:"self"`
	StartImportation   map[string]interface{} `json:"startImportation,omitempty"`
}
