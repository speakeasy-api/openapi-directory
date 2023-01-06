package shared

type UserProfile struct {
	Doctor        *string `json:"doctor,omitempty"`
	ID            *string `json:"id,omitempty"`
	IsDoctor      *string `json:"is_doctor,omitempty"`
	IsStaff       *string `json:"is_staff,omitempty"`
	Permissions   *string `json:"permissions,omitempty"`
	PracticeGroup *string `json:"practice_group,omitempty"`
	Username      *string `json:"username,omitempty"`
}
