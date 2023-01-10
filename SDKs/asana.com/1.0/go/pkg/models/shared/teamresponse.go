package shared

// TeamResponseOrganization
// The organization/workspace the team belongs to.
type TeamResponseOrganization struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// TeamResponse
// A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
type TeamResponse struct {
	Description     *string                   `json:"description,omitempty"`
	Gid             *string                   `json:"gid,omitempty"`
	HTMLDescription *string                   `json:"html_description,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	Organization    *TeamResponseOrganization `json:"organization,omitempty"`
	PermalinkURL    *string                   `json:"permalink_url,omitempty"`
	ResourceType    *string                   `json:"resource_type,omitempty"`
}
