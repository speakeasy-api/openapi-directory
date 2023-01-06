package shared

import (
	"time"
)

// PortfolioResponse
// A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
// Portfolios have some restrictions on size. Each portfolio has a max of 250 items and, like projects, a max of 20 custom fields.
type PortfolioResponse struct {
	CreatedAt           *time.Time                   `json:"created_at,omitempty"`
	CreatedBy           *UserCompact                 `json:"created_by,omitempty"`
	CustomFieldSettings []CustomFieldSettingResponse `json:"custom_field_settings,omitempty"`
	DueOn               *time.Time                   `json:"due_on,omitempty"`
	Members             []UserCompact                `json:"members,omitempty"`
	Owner               *UserCompact                 `json:"owner,omitempty"`
	PermalinkURL        *string                      `json:"permalink_url,omitempty"`
	StartOn             *time.Time                   `json:"start_on,omitempty"`
	Workspace           map[string]interface{}       `json:"workspace,omitempty"`
}
