package shared

// ResourceCollaborator
// The rights of the current user on a score or collection
type ResourceCollaborator struct {
	ACLAdmin       *bool       `json:"aclAdmin,omitempty"`
	ACLRead        *bool       `json:"aclRead,omitempty"`
	ACLWrite       *bool       `json:"aclWrite,omitempty"`
	Collection     *string     `json:"collection,omitempty"`
	Group          *Group      `json:"group,omitempty"`
	ID             *string     `json:"id,omitempty"`
	Invited        *bool       `json:"invited,omitempty"`
	IsCollaborator *bool       `json:"isCollaborator,omitempty"`
	Score          *string     `json:"score,omitempty"`
	User           *UserPublic `json:"user,omitempty"`
	UserEmail      *string     `json:"userEmail,omitempty"`
}
