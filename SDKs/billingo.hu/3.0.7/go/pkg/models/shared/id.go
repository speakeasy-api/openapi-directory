package shared

type ID struct {
	ID       *int64 `json:"id,omitempty"`
	LegacyID *int64 `json:"legacy_id,omitempty"`
}
