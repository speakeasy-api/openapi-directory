package shared

// SectionCompact
// A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
type SectionCompact struct {
	Name *string `json:"name,omitempty"`
}
