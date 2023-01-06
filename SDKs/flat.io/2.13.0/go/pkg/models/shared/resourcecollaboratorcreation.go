package shared

// ResourceCollaboratorCreation
// Add a collaborator to a resource.
type ResourceCollaboratorCreation struct {
	ACLAdmin  *bool   `json:"aclAdmin,omitempty"`
	ACLRead   *bool   `json:"aclRead,omitempty"`
	ACLWrite  *bool   `json:"aclWrite,omitempty"`
	Group     *string `json:"group,omitempty"`
	User      *string `json:"user,omitempty"`
	UserEmail *string `json:"userEmail,omitempty"`
	UserToken *string `json:"userToken,omitempty"`
}
