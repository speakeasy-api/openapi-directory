package shared

// DataSourceConfiguration
// Configuration information for a Amazon Kendra data source.
type DataSourceConfiguration struct {
	ConfluenceConfiguration  *ConfluenceConfiguration   `json:"ConfluenceConfiguration,omitempty"`
	DatabaseConfiguration    *DatabaseConfiguration     `json:"DatabaseConfiguration,omitempty"`
	GoogleDriveConfiguration *GoogleDriveConfiguration  `json:"GoogleDriveConfiguration,omitempty"`
	OneDriveConfiguration    *OneDriveConfiguration     `json:"OneDriveConfiguration,omitempty"`
	S3Configuration          *S3DataSourceConfiguration `json:"S3Configuration,omitempty"`
	SalesforceConfiguration  *SalesforceConfiguration   `json:"SalesforceConfiguration,omitempty"`
	ServiceNowConfiguration  *ServiceNowConfiguration   `json:"ServiceNowConfiguration,omitempty"`
	SharePointConfiguration  *SharePointConfiguration   `json:"SharePointConfiguration,omitempty"`
	WebCrawlerConfiguration  *WebCrawlerConfiguration   `json:"WebCrawlerConfiguration,omitempty"`
	WorkDocsConfiguration    *WorkDocsConfiguration     `json:"WorkDocsConfiguration,omitempty"`
}
