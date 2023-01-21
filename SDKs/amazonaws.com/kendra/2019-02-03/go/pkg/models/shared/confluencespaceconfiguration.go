package shared

// ConfluenceSpaceConfiguration
// Specifies the configuration for indexing Confluence spaces.
type ConfluenceSpaceConfiguration struct {
	CrawlArchivedSpaces *bool                                `json:"CrawlArchivedSpaces,omitempty"`
	CrawlPersonalSpaces *bool                                `json:"CrawlPersonalSpaces,omitempty"`
	ExcludeSpaces       []string                             `json:"ExcludeSpaces,omitempty"`
	IncludeSpaces       []string                             `json:"IncludeSpaces,omitempty"`
	SpaceFieldMappings  []ConfluenceSpaceToIndexFieldMapping `json:"SpaceFieldMappings,omitempty"`
}
