package shared

// DetectedCatalogColumn
// The catalog column detected during the first parsing step
type DetectedCatalogColumn struct {
	CatalogColumnName                  string                              `json:"catalogColumnName"`
	Configuration                      ColumnConfiguration                 `json:"configuration"`
	DuplicateProductValueConfiguration *DuplicateProductValueConfiguration `json:"duplicateProductValueConfiguration,omitempty"`
	ID                                 string                              `json:"id"`
	Ignored                            *bool                               `json:"ignored,omitempty"`
	Links                              DetectedCatalogColumnLinks          `json:"links"`
	UserColumName                      string                              `json:"userColumName"`
}
