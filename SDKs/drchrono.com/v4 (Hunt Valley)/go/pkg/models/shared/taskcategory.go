package shared

type TaskCategory struct {
	Archived      *bool   `json:"archived,omitempty"`
	CreatedAt     *string `json:"created_at,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	IsGlobal      *string `json:"is_global,omitempty"`
	Name          string  `json:"name"`
	PracticeGroup int64   `json:"practice_group"`
	UpdatedAt     *string `json:"updated_at,omitempty"`
}
