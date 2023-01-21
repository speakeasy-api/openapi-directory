package shared

// SalesforceConfiguration
// Provides configuration information for connecting to a Salesforce data source.
type SalesforceConfiguration struct {
	ChatterFeedConfiguration              *SalesforceChatterFeedConfiguration              `json:"ChatterFeedConfiguration,omitempty"`
	CrawlAttachments                      *bool                                            `json:"CrawlAttachments,omitempty"`
	ExcludeAttachmentFilePatterns         []string                                         `json:"ExcludeAttachmentFilePatterns,omitempty"`
	IncludeAttachmentFilePatterns         []string                                         `json:"IncludeAttachmentFilePatterns,omitempty"`
	KnowledgeArticleConfiguration         *SalesforceKnowledgeArticleConfiguration         `json:"KnowledgeArticleConfiguration,omitempty"`
	SecretArn                             string                                           `json:"SecretArn"`
	ServerURL                             string                                           `json:"ServerUrl"`
	StandardObjectAttachmentConfiguration *SalesforceStandardObjectAttachmentConfiguration `json:"StandardObjectAttachmentConfiguration,omitempty"`
	StandardObjectConfigurations          []SalesforceStandardObjectConfiguration          `json:"StandardObjectConfigurations,omitempty"`
}
