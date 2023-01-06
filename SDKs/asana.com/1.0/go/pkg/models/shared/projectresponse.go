package shared

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
	Name *string `json:"name,omitempty"`
}

// ProjectResponse
// A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
type ProjectResponse struct {
	CustomFields []CustomFieldCompact     `json:"custom_fields,omitempty"`
	Followers    []UserCompact            `json:"followers,omitempty"`
	Icon         *ProjectResponseIconEnum `json:"icon,omitempty"`
	Owner        *ProjectResponseOwner    `json:"owner,omitempty"`
	PermalinkURL *string                  `json:"permalink_url,omitempty"`
	Team         map[string]interface{}   `json:"team,omitempty"`
}
