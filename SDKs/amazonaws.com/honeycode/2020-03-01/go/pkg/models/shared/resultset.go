package shared

type ResultSet struct {
	Headers []ColumnMetadata `json:"headers,omitempty"`
	Rows    []ResultRow      `json:"rows,omitempty"`
}
