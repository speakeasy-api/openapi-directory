package shared

type ProjectCollaborator struct {
	Name     *string `json:"name,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	Status   *string `json:"status,omitempty"`
	UserID   *int64  `json:"user_id,omitempty"`
}
