package shared

// GoalRequest
// A generic Asana Resource, containing a globally unique identifier.
type GoalRequest struct {
	DueOn            *string                `json:"due_on,omitempty"`
	Followers        []UserCompact          `json:"followers,omitempty"`
	HTMLNotes        *string                `json:"html_notes,omitempty"`
	IsWorkspaceLevel *bool                  `json:"is_workspace_level,omitempty"`
	Liked            *bool                  `json:"liked,omitempty"`
	Metric           map[string]interface{} `json:"metric,omitempty"`
	Notes            *string                `json:"notes,omitempty"`
	StartOn          *string                `json:"start_on,omitempty"`
	Status           *string                `json:"status,omitempty"`
	Team             map[string]interface{} `json:"team,omitempty"`
	TimePeriod       map[string]interface{} `json:"time_period,omitempty"`
	Workspace        map[string]interface{} `json:"workspace,omitempty"`
}
