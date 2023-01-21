package shared

// ConfluencePageConfiguration
// Specifies the page settings for the Confluence data source.
type ConfluencePageConfiguration struct {
	PageFieldMappings []ConfluencePageToIndexFieldMapping `json:"PageFieldMappings,omitempty"`
}
