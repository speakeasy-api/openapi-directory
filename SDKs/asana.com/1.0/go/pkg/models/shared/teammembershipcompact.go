package shared

// TeamMembershipCompact
// This object represents a user's connection to a team.
type TeamMembershipCompact struct {
	IsGuest *bool        `json:"is_guest,omitempty"`
	Team    *TeamCompact `json:"team,omitempty"`
	User    *UserCompact `json:"user,omitempty"`
}
