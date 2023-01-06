package shared

// WorkspaceResponse
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type WorkspaceResponse struct {
	EmailDomains   []string `json:"email_domains,omitempty"`
	IsOrganization *bool    `json:"is_organization,omitempty"`
}
