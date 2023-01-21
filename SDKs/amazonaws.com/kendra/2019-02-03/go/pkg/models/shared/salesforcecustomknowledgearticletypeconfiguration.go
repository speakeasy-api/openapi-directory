package shared

// SalesforceCustomKnowledgeArticleTypeConfiguration
// Provides configuration information for indexing Salesforce custom articles.
type SalesforceCustomKnowledgeArticleTypeConfiguration struct {
	DocumentDataFieldName  string                          `json:"DocumentDataFieldName"`
	DocumentTitleFieldName *string                         `json:"DocumentTitleFieldName,omitempty"`
	FieldMappings          []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	Name                   string                          `json:"Name"`
}
