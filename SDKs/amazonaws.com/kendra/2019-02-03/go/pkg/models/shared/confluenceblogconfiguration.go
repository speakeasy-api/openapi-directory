package shared

// ConfluenceBlogConfiguration
// Specifies the blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code> type.
type ConfluenceBlogConfiguration struct {
	BlogFieldMappings []ConfluenceBlogToIndexFieldMapping `json:"BlogFieldMappings,omitempty"`
}
