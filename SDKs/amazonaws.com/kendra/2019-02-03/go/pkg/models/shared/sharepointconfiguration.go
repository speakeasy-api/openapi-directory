package shared

// SharePointConfiguration
// Provides configuration information for connecting to a Microsoft SharePoint data source.
type SharePointConfiguration struct {
	CrawlAttachments       *bool                           `json:"CrawlAttachments,omitempty"`
	DisableLocalGroups     *bool                           `json:"DisableLocalGroups,omitempty"`
	DocumentTitleFieldName *string                         `json:"DocumentTitleFieldName,omitempty"`
	ExclusionPatterns      []string                        `json:"ExclusionPatterns,omitempty"`
	FieldMappings          []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	InclusionPatterns      []string                        `json:"InclusionPatterns,omitempty"`
	SecretArn              string                          `json:"SecretArn"`
	SharePointVersion      SharePointVersionEnum           `json:"SharePointVersion"`
	SslCertificateS3Path   *S3Path                         `json:"SslCertificateS3Path,omitempty"`
	Urls                   []string                        `json:"Urls"`
	UseChangeLog           *bool                           `json:"UseChangeLog,omitempty"`
	VpcConfiguration       *DataSourceVpcConfiguration     `json:"VpcConfiguration,omitempty"`
}
