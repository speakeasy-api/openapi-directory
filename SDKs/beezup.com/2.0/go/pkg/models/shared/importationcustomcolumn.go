package shared

// ImportationCustomColumn
// The custom column configuration
type ImportationCustomColumn struct {
	Configuration ColumnConfiguration          `json:"configuration"`
	ID            string                       `json:"id"`
	Links         ImportationCustomColumnLinks `json:"links"`
	UserColumName string                       `json:"userColumName"`
}
