package shared

// CustomColumn
// The custom column configuration
type CustomColumn struct {
	CatalogColumnDependencies []string            `json:"catalogColumnDependencies,omitempty"`
	Configuration             ColumnConfiguration `json:"configuration"`
	ID                        string              `json:"id"`
	Links                     CustomColumnLinks   `json:"links"`
	UserColumName             string              `json:"userColumName"`
}
