package shared

// ProjectStatusCompact
// A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
type ProjectStatusCompact struct {
	Title *string `json:"title,omitempty"`
}
