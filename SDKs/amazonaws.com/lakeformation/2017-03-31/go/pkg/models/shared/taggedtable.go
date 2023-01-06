package shared

// TaggedTableTable
// A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
type TaggedTableTable struct {
	CatalogID     *string                `json:"CatalogId,omitempty"`
	DatabaseName  string                 `json:"DatabaseName"`
	Name          *string                `json:"Name,omitempty"`
	TableWildcard map[string]interface{} `json:"TableWildcard,omitempty"`
}

// TaggedTable
// A structure describing a table resource with tags.
type TaggedTable struct {
	LFTagOnDatabase []LfTagPair       `json:"LFTagOnDatabase,omitempty"`
	LFTagsOnColumns []ColumnLfTag     `json:"LFTagsOnColumns,omitempty"`
	LFTagsOnTable   []LfTagPair       `json:"LFTagsOnTable,omitempty"`
	Table           *TaggedTableTable `json:"Table,omitempty"`
}
