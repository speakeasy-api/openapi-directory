package shared

type TaskNote struct {
	Archived  *bool   `json:"archived,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	Task      int64   `json:"task"`
	Text      string  `json:"text"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
