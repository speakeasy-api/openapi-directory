package shared

// ServiceNowServiceCatalogConfiguration
// Provides configuration information for crawling service catalog items in the ServiceNow site
type ServiceNowServiceCatalogConfiguration struct {
	CrawlAttachments              *bool                           `json:"CrawlAttachments,omitempty"`
	DocumentDataFieldName         string                          `json:"DocumentDataFieldName"`
	DocumentTitleFieldName        *string                         `json:"DocumentTitleFieldName,omitempty"`
	ExcludeAttachmentFilePatterns []string                        `json:"ExcludeAttachmentFilePatterns,omitempty"`
	FieldMappings                 []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	IncludeAttachmentFilePatterns []string                        `json:"IncludeAttachmentFilePatterns,omitempty"`
}
