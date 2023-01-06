package shared

type AccountUpdate struct {
	GroupID  *int64 `json:"group_id,omitempty"`
	IsActive *bool  `json:"is_active,omitempty"`
}
