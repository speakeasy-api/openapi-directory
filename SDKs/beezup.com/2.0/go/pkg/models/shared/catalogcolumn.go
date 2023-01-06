package shared

// CatalogColumn
// The catalog column configuration
type CatalogColumn struct {
	CatalogColumnName                  string                              `json:"catalogColumnName"`
	Configuration                      ColumnConfiguration                 `json:"configuration"`
	DuplicateProductValueConfiguration *DuplicateProductValueConfiguration `json:"duplicateProductValueConfiguration,omitempty"`
	ID                                 string                              `json:"id"`
	Ignored                            *bool                               `json:"ignored,omitempty"`
	Links                              CatalogColumnLinks                  `json:"links"`
	UserColumName                      string                              `json:"userColumName"`
}
