package shared

type CareTeamMember struct {
	Appointment *string `json:"appointment,omitempty"`
	CreatedAt   *string `json:"created_at,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Patient     *string `json:"patient,omitempty"`
	User        *string `json:"user,omitempty"`
}
