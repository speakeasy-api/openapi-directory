package shared

// SalesforceStandardKnowledgeArticleTypeConfiguration
// Provides configuration information for standard Salesforce knowledge articles.
type SalesforceStandardKnowledgeArticleTypeConfiguration struct {
	DocumentDataFieldName  string                          `json:"DocumentDataFieldName"`
	DocumentTitleFieldName *string                         `json:"DocumentTitleFieldName,omitempty"`
	FieldMappings          []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
}
