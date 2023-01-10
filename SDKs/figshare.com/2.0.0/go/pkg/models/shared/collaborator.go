package shared

type Collaborator struct {
	Name     *string `json:"name,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	UserID   *int64  `json:"user_id,omitempty"`
}
