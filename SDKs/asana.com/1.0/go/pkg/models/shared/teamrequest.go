package shared

// TeamRequestInput
// A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
type TeamRequestInput struct {
	Description     *string `json:"description,omitempty"`
	HTMLDescription *string `json:"html_description,omitempty"`
	Name            *string `json:"name,omitempty"`
	Organization    *string `json:"organization,omitempty"`
}
