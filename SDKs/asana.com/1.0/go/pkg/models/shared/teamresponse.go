package shared

// TeamResponse
// A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
type TeamResponse struct {
	Description     *string                `json:"description,omitempty"`
	HTMLDescription *string                `json:"html_description,omitempty"`
	Organization    map[string]interface{} `json:"organization,omitempty"`
	PermalinkURL    *string                `json:"permalink_url,omitempty"`
}
