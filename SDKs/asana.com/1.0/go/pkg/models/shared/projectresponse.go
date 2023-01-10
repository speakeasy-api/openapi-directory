package shared

import (
	"time"
)

type ProjectResponseColorEnum string

const (
	ProjectResponseColorEnumDarkPink      ProjectResponseColorEnum = "dark-pink"
	ProjectResponseColorEnumDarkGreen     ProjectResponseColorEnum = "dark-green"
	ProjectResponseColorEnumDarkBlue      ProjectResponseColorEnum = "dark-blue"
	ProjectResponseColorEnumDarkRed       ProjectResponseColorEnum = "dark-red"
	ProjectResponseColorEnumDarkTeal      ProjectResponseColorEnum = "dark-teal"
	ProjectResponseColorEnumDarkBrown     ProjectResponseColorEnum = "dark-brown"
	ProjectResponseColorEnumDarkOrange    ProjectResponseColorEnum = "dark-orange"
	ProjectResponseColorEnumDarkPurple    ProjectResponseColorEnum = "dark-purple"
	ProjectResponseColorEnumDarkWarmGray  ProjectResponseColorEnum = "dark-warm-gray"
	ProjectResponseColorEnumLightPink     ProjectResponseColorEnum = "light-pink"
	ProjectResponseColorEnumLightGreen    ProjectResponseColorEnum = "light-green"
	ProjectResponseColorEnumLightBlue     ProjectResponseColorEnum = "light-blue"
	ProjectResponseColorEnumLightRed      ProjectResponseColorEnum = "light-red"
	ProjectResponseColorEnumLightTeal     ProjectResponseColorEnum = "light-teal"
	ProjectResponseColorEnumLightBrown    ProjectResponseColorEnum = "light-brown"
	ProjectResponseColorEnumLightOrange   ProjectResponseColorEnum = "light-orange"
	ProjectResponseColorEnumLightPurple   ProjectResponseColorEnum = "light-purple"
	ProjectResponseColorEnumLightWarmGray ProjectResponseColorEnum = "light-warm-gray"
)

type ProjectResponseCurrentStatusColorEnum string

const (
	ProjectResponseCurrentStatusColorEnumGreen  ProjectResponseCurrentStatusColorEnum = "green"
	ProjectResponseCurrentStatusColorEnumYellow ProjectResponseCurrentStatusColorEnum = "yellow"
	ProjectResponseCurrentStatusColorEnumRed    ProjectResponseCurrentStatusColorEnum = "red"
	ProjectResponseCurrentStatusColorEnumBlue   ProjectResponseCurrentStatusColorEnum = "blue"
)

// ProjectResponseCurrentStatus
// A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
type ProjectResponseCurrentStatus struct {
	Author       *UserCompact                          `json:"author,omitempty"`
	Color        ProjectResponseCurrentStatusColorEnum `json:"color"`
	CreatedAt    *time.Time                            `json:"created_at,omitempty"`
	CreatedBy    *UserCompact                          `json:"created_by,omitempty"`
	Gid          *string                               `json:"gid,omitempty"`
	HTMLText     *string                               `json:"html_text,omitempty"`
	ModifiedAt   *time.Time                            `json:"modified_at,omitempty"`
	ResourceType *string                               `json:"resource_type,omitempty"`
	Text         string                                `json:"text"`
	Title        *string                               `json:"title,omitempty"`
}

type ProjectResponseDefaultViewEnum string

const (
	ProjectResponseDefaultViewEnumList     ProjectResponseDefaultViewEnum = "list"
	ProjectResponseDefaultViewEnumBoard    ProjectResponseDefaultViewEnum = "board"
	ProjectResponseDefaultViewEnumCalendar ProjectResponseDefaultViewEnum = "calendar"
	ProjectResponseDefaultViewEnumTimeline ProjectResponseDefaultViewEnum = "timeline"
)

type ProjectResponseIconEnum string

const (
	ProjectResponseIconEnumList           ProjectResponseIconEnum = "list"
	ProjectResponseIconEnumBoard          ProjectResponseIconEnum = "board"
	ProjectResponseIconEnumTimeline       ProjectResponseIconEnum = "timeline"
	ProjectResponseIconEnumCalendar       ProjectResponseIconEnum = "calendar"
	ProjectResponseIconEnumRocket         ProjectResponseIconEnum = "rocket"
	ProjectResponseIconEnumPeople         ProjectResponseIconEnum = "people"
	ProjectResponseIconEnumGraph          ProjectResponseIconEnum = "graph"
	ProjectResponseIconEnumStar           ProjectResponseIconEnum = "star"
	ProjectResponseIconEnumBug            ProjectResponseIconEnum = "bug"
	ProjectResponseIconEnumLightBulb      ProjectResponseIconEnum = "light_bulb"
	ProjectResponseIconEnumGlobe          ProjectResponseIconEnum = "globe"
	ProjectResponseIconEnumGear           ProjectResponseIconEnum = "gear"
	ProjectResponseIconEnumNotebook       ProjectResponseIconEnum = "notebook"
	ProjectResponseIconEnumComputer       ProjectResponseIconEnum = "computer"
	ProjectResponseIconEnumCheck          ProjectResponseIconEnum = "check"
	ProjectResponseIconEnumTarget         ProjectResponseIconEnum = "target"
	ProjectResponseIconEnumHTML           ProjectResponseIconEnum = "html"
	ProjectResponseIconEnumMegaphone      ProjectResponseIconEnum = "megaphone"
	ProjectResponseIconEnumChatBubbles    ProjectResponseIconEnum = "chat_bubbles"
	ProjectResponseIconEnumBriefcase      ProjectResponseIconEnum = "briefcase"
	ProjectResponseIconEnumPageLayout     ProjectResponseIconEnum = "page_layout"
	ProjectResponseIconEnumMountainFlag   ProjectResponseIconEnum = "mountain_flag"
	ProjectResponseIconEnumPuzzle         ProjectResponseIconEnum = "puzzle"
	ProjectResponseIconEnumPresentation   ProjectResponseIconEnum = "presentation"
	ProjectResponseIconEnumLineAndSymbols ProjectResponseIconEnum = "line_and_symbols"
	ProjectResponseIconEnumSpeedDial      ProjectResponseIconEnum = "speed_dial"
	ProjectResponseIconEnumRibbon         ProjectResponseIconEnum = "ribbon"
	ProjectResponseIconEnumShoe           ProjectResponseIconEnum = "shoe"
	ProjectResponseIconEnumShoppingBasket ProjectResponseIconEnum = "shopping_basket"
	ProjectResponseIconEnumMap            ProjectResponseIconEnum = "map"
	ProjectResponseIconEnumTicket         ProjectResponseIconEnum = "ticket"
	ProjectResponseIconEnumCoins          ProjectResponseIconEnum = "coins"
)

// ProjectResponseOwner
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type ProjectResponseOwner struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// ProjectResponseTeam
// *Create-only*. The team that this project is shared with. This field only exists for projects in organizations.
type ProjectResponseTeam struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// ProjectResponseWorkspace
// *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
type ProjectResponseWorkspace struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// ProjectResponse
// A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
type ProjectResponse struct {
	Archived            *bool                           `json:"archived,omitempty"`
	Color               *ProjectResponseColorEnum       `json:"color,omitempty"`
	CreatedAt           *time.Time                      `json:"created_at,omitempty"`
	CurrentStatus       *ProjectResponseCurrentStatus   `json:"current_status,omitempty"`
	CustomFieldSettings []CustomFieldSettingCompact     `json:"custom_field_settings,omitempty"`
	CustomFields        []CustomFieldCompact            `json:"custom_fields,omitempty"`
	DefaultView         *ProjectResponseDefaultViewEnum `json:"default_view,omitempty"`
	DueDate             *time.Time                      `json:"due_date,omitempty"`
	DueOn               *time.Time                      `json:"due_on,omitempty"`
	Followers           []UserCompact                   `json:"followers,omitempty"`
	Gid                 *string                         `json:"gid,omitempty"`
	HTMLNotes           *string                         `json:"html_notes,omitempty"`
	Icon                *ProjectResponseIconEnum        `json:"icon,omitempty"`
	IsTemplate          *bool                           `json:"is_template,omitempty"`
	Members             []UserCompact                   `json:"members,omitempty"`
	ModifiedAt          *time.Time                      `json:"modified_at,omitempty"`
	Name                *string                         `json:"name,omitempty"`
	Notes               *string                         `json:"notes,omitempty"`
	Owner               *ProjectResponseOwner           `json:"owner,omitempty"`
	PermalinkURL        *string                         `json:"permalink_url,omitempty"`
	Public              *bool                           `json:"public,omitempty"`
	ResourceType        *string                         `json:"resource_type,omitempty"`
	StartOn             *time.Time                      `json:"start_on,omitempty"`
	Team                *ProjectResponseTeam            `json:"team,omitempty"`
	Workspace           *ProjectResponseWorkspace       `json:"workspace,omitempty"`
}
