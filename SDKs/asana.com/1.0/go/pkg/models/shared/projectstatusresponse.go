package shared

import (
	"time"
)

type ProjectStatusResponseColorEnum string

const (
	ProjectStatusResponseColorEnumGreen  ProjectStatusResponseColorEnum = "green"
	ProjectStatusResponseColorEnumYellow ProjectStatusResponseColorEnum = "yellow"
	ProjectStatusResponseColorEnumRed    ProjectStatusResponseColorEnum = "red"
	ProjectStatusResponseColorEnumBlue   ProjectStatusResponseColorEnum = "blue"
)

// ProjectStatusResponse
// A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
type ProjectStatusResponse struct {
	Author       *UserCompact                   `json:"author,omitempty"`
	Color        ProjectStatusResponseColorEnum `json:"color"`
	CreatedAt    *time.Time                     `json:"created_at,omitempty"`
	CreatedBy    *UserCompact                   `json:"created_by,omitempty"`
	Gid          *string                        `json:"gid,omitempty"`
	HTMLText     *string                        `json:"html_text,omitempty"`
	ModifiedAt   *time.Time                     `json:"modified_at,omitempty"`
	ResourceType *string                        `json:"resource_type,omitempty"`
	Text         string                         `json:"text"`
	Title        *string                        `json:"title,omitempty"`
}
