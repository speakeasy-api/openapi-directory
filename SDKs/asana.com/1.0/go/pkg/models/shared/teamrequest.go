package shared

// TeamRequest
// A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
type TeamRequest struct {
	Description     *string `json:"description,omitempty"`
	HTMLDescription *string `json:"html_description,omitempty"`
	Organization    *string `json:"organization,omitempty"`
}
