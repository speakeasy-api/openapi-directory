package shared

// WorkDocsConfiguration
// <p>Provides the configuration information to connect to Amazon WorkDocs as your data source.</p> <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.</p>
type WorkDocsConfiguration struct {
	CrawlComments     *bool                           `json:"CrawlComments,omitempty"`
	ExclusionPatterns []string                        `json:"ExclusionPatterns,omitempty"`
	FieldMappings     []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	InclusionPatterns []string                        `json:"InclusionPatterns,omitempty"`
	OrganizationID    string                          `json:"OrganizationId"`
	UseChangeLog      *bool                           `json:"UseChangeLog,omitempty"`
}
