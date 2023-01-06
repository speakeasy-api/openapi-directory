package shared

// ResourceRights
// The rights of the current user on a score or collection
type ResourceRights struct {
	ACLAdmin       *bool `json:"aclAdmin,omitempty"`
	ACLRead        *bool `json:"aclRead,omitempty"`
	ACLWrite       *bool `json:"aclWrite,omitempty"`
	IsCollaborator *bool `json:"isCollaborator,omitempty"`
}
