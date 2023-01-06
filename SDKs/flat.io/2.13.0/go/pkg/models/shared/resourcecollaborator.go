package shared

// ResourceCollaborator
// The rights of the current user on a score or collection
type ResourceCollaborator struct {
	Collection *string     `json:"collection,omitempty"`
	Group      *Group      `json:"group,omitempty"`
	ID         *string     `json:"id,omitempty"`
	Invited    *bool       `json:"invited,omitempty"`
	Score      *string     `json:"score,omitempty"`
	User       *UserPublic `json:"user,omitempty"`
	UserEmail  *string     `json:"userEmail,omitempty"`
}
