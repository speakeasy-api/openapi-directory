package shared

type GetResourceLfTagsResponse struct {
	LFTagOnDatabase []LfTagPair   `json:"LFTagOnDatabase,omitempty"`
	LFTagsOnColumns []ColumnLfTag `json:"LFTagsOnColumns,omitempty"`
	LFTagsOnTable   []LfTagPair   `json:"LFTagsOnTable,omitempty"`
}
