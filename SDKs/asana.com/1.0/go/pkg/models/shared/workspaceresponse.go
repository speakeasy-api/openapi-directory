package shared

// WorkspaceResponse
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceResponse struct {
	EmailDomains   []string `json:"email_domains,omitempty"`
	Gid            *string  `json:"gid,omitempty"`
	IsOrganization *bool    `json:"is_organization,omitempty"`
	Name           *string  `json:"name,omitempty"`
	ResourceType   *string  `json:"resource_type,omitempty"`
}
