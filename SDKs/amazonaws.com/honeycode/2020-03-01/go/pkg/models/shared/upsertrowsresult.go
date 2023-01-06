package shared

type UpsertRowsResult struct {
	RowIds       []string          `json:"rowIds,omitempty"`
	UpsertAction *UpsertActionEnum `json:"upsertAction,omitempty"`
}
