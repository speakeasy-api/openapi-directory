package shared

type UserProfilesGroup struct {
	Archived      *bool    `json:"archived,omitempty"`
	CreatedAt     *string  `json:"created_at,omitempty"`
	ID            *int64   `json:"id,omitempty"`
	Members       []string `json:"members,omitempty"`
	Name          *string  `json:"name,omitempty"`
	PracticeGroup *string  `json:"practice_group,omitempty"`
	UpdatedAt     *string  `json:"updated_at,omitempty"`
}
