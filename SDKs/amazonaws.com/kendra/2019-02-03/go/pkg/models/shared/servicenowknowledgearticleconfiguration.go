package shared

// ServiceNowKnowledgeArticleConfiguration
// Provides configuration information for crawling knowledge articles in the ServiceNow site.
type ServiceNowKnowledgeArticleConfiguration struct {
	CrawlAttachments              *bool                           `json:"CrawlAttachments,omitempty"`
	DocumentDataFieldName         string                          `json:"DocumentDataFieldName"`
	DocumentTitleFieldName        *string                         `json:"DocumentTitleFieldName,omitempty"`
	ExcludeAttachmentFilePatterns []string                        `json:"ExcludeAttachmentFilePatterns,omitempty"`
	FieldMappings                 []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	FilterQuery                   *string                         `json:"FilterQuery,omitempty"`
	IncludeAttachmentFilePatterns []string                        `json:"IncludeAttachmentFilePatterns,omitempty"`
}
