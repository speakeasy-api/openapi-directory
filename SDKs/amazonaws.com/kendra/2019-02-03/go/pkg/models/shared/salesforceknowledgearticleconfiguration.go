package shared

// SalesforceKnowledgeArticleConfiguration
// Specifies configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both
type SalesforceKnowledgeArticleConfiguration struct {
	CustomKnowledgeArticleTypeConfigurations  []SalesforceCustomKnowledgeArticleTypeConfiguration  `json:"CustomKnowledgeArticleTypeConfigurations,omitempty"`
	IncludedStates                            []SalesforceKnowledgeArticleStateEnum                `json:"IncludedStates"`
	StandardKnowledgeArticleTypeConfiguration *SalesforceStandardKnowledgeArticleTypeConfiguration `json:"StandardKnowledgeArticleTypeConfiguration,omitempty"`
}
