package shared

// ServiceNowConfiguration
// Provides configuration information required to connect to a ServiceNow data source.
type ServiceNowConfiguration struct {
	AuthenticationType            *ServiceNowAuthenticationTypeEnum        `json:"AuthenticationType,omitempty"`
	HostURL                       string                                   `json:"HostUrl"`
	KnowledgeArticleConfiguration *ServiceNowKnowledgeArticleConfiguration `json:"KnowledgeArticleConfiguration,omitempty"`
	SecretArn                     string                                   `json:"SecretArn"`
	ServiceCatalogConfiguration   *ServiceNowServiceCatalogConfiguration   `json:"ServiceCatalogConfiguration,omitempty"`
	ServiceNowBuildVersion        ServiceNowBuildVersionTypeEnum           `json:"ServiceNowBuildVersion"`
}
