package shared

import (
	"time"
)

type ProjectRequestColorEnum string

const (
	ProjectRequestColorEnumDarkPink      ProjectRequestColorEnum = "dark-pink"
	ProjectRequestColorEnumDarkGreen     ProjectRequestColorEnum = "dark-green"
	ProjectRequestColorEnumDarkBlue      ProjectRequestColorEnum = "dark-blue"
	ProjectRequestColorEnumDarkRed       ProjectRequestColorEnum = "dark-red"
	ProjectRequestColorEnumDarkTeal      ProjectRequestColorEnum = "dark-teal"
	ProjectRequestColorEnumDarkBrown     ProjectRequestColorEnum = "dark-brown"
	ProjectRequestColorEnumDarkOrange    ProjectRequestColorEnum = "dark-orange"
	ProjectRequestColorEnumDarkPurple    ProjectRequestColorEnum = "dark-purple"
	ProjectRequestColorEnumDarkWarmGray  ProjectRequestColorEnum = "dark-warm-gray"
	ProjectRequestColorEnumLightPink     ProjectRequestColorEnum = "light-pink"
	ProjectRequestColorEnumLightGreen    ProjectRequestColorEnum = "light-green"
	ProjectRequestColorEnumLightBlue     ProjectRequestColorEnum = "light-blue"
	ProjectRequestColorEnumLightRed      ProjectRequestColorEnum = "light-red"
	ProjectRequestColorEnumLightTeal     ProjectRequestColorEnum = "light-teal"
	ProjectRequestColorEnumLightBrown    ProjectRequestColorEnum = "light-brown"
	ProjectRequestColorEnumLightOrange   ProjectRequestColorEnum = "light-orange"
	ProjectRequestColorEnumLightPurple   ProjectRequestColorEnum = "light-purple"
	ProjectRequestColorEnumLightWarmGray ProjectRequestColorEnum = "light-warm-gray"
)

type ProjectRequestCurrentStatusColorEnum string

const (
	ProjectRequestCurrentStatusColorEnumGreen  ProjectRequestCurrentStatusColorEnum = "green"
	ProjectRequestCurrentStatusColorEnumYellow ProjectRequestCurrentStatusColorEnum = "yellow"
	ProjectRequestCurrentStatusColorEnumRed    ProjectRequestCurrentStatusColorEnum = "red"
	ProjectRequestCurrentStatusColorEnumBlue   ProjectRequestCurrentStatusColorEnum = "blue"
)

// ProjectRequestCurrentStatusInput
// A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
type ProjectRequestCurrentStatusInput struct {
	Author    *UserCompactInput                    `json:"author,omitempty"`
	Color     ProjectRequestCurrentStatusColorEnum `json:"color"`
	CreatedBy *UserCompactInput                    `json:"created_by,omitempty"`
	HTMLText  *string                              `json:"html_text,omitempty"`
	Text      string                               `json:"text"`
	Title     *string                              `json:"title,omitempty"`
}

type ProjectRequestDefaultViewEnum string

const (
	ProjectRequestDefaultViewEnumList     ProjectRequestDefaultViewEnum = "list"
	ProjectRequestDefaultViewEnumBoard    ProjectRequestDefaultViewEnum = "board"
	ProjectRequestDefaultViewEnumCalendar ProjectRequestDefaultViewEnum = "calendar"
	ProjectRequestDefaultViewEnumTimeline ProjectRequestDefaultViewEnum = "timeline"
)

// ProjectRequestWorkspaceInput
// *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
type ProjectRequestWorkspaceInput struct {
	Name *string `json:"name,omitempty"`
}

// ProjectRequestInput
// A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
type ProjectRequestInput struct {
	Archived      *bool                             `json:"archived,omitempty"`
	Color         *ProjectRequestColorEnum          `json:"color,omitempty"`
	CurrentStatus *ProjectRequestCurrentStatusInput `json:"current_status,omitempty"`
	CustomFields  map[string]string                 `json:"custom_fields,omitempty"`
	DefaultView   *ProjectRequestDefaultViewEnum    `json:"default_view,omitempty"`
	DueDate       *time.Time                        `json:"due_date,omitempty"`
	DueOn         *time.Time                        `json:"due_on,omitempty"`
	Followers     *string                           `json:"followers,omitempty"`
	HTMLNotes     *string                           `json:"html_notes,omitempty"`
	IsTemplate    *bool                             `json:"is_template,omitempty"`
	Name          *string                           `json:"name,omitempty"`
	Notes         *string                           `json:"notes,omitempty"`
	Owner         *string                           `json:"owner,omitempty"`
	Public        *bool                             `json:"public,omitempty"`
	StartOn       *time.Time                        `json:"start_on,omitempty"`
	Team          *string                           `json:"team,omitempty"`
	Workspace     *ProjectRequestWorkspaceInput     `json:"workspace,omitempty"`
}
