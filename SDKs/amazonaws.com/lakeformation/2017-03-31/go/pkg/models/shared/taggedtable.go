package shared

// TaggedTable
// A structure describing a table resource with tags.
type TaggedTable struct {
	LFTagOnDatabase []LfTagPair    `json:"LFTagOnDatabase,omitempty"`
	LFTagsOnColumns []ColumnLfTag  `json:"LFTagsOnColumns,omitempty"`
	LFTagsOnTable   []LfTagPair    `json:"LFTagsOnTable,omitempty"`
	Table           *TableResource `json:"Table,omitempty"`
}
