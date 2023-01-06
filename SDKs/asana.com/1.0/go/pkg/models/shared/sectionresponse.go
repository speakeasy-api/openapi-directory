package shared

import (
	"time"
)

// SectionResponse
// A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
type SectionResponse struct {
	CreatedAt *time.Time       `json:"created_at,omitempty"`
	Project   *ProjectCompact  `json:"project,omitempty"`
	Projects  []ProjectCompact `json:"projects,omitempty"`
}
