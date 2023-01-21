package shared

// ConfluenceConfiguration
// Provides configuration information for data sources that connect to Confluence.
type ConfluenceConfiguration struct {
	AttachmentConfiguration *ConfluenceAttachmentConfiguration `json:"AttachmentConfiguration,omitempty"`
	BlogConfiguration       *ConfluenceBlogConfiguration       `json:"BlogConfiguration,omitempty"`
	ExclusionPatterns       []string                           `json:"ExclusionPatterns,omitempty"`
	InclusionPatterns       []string                           `json:"InclusionPatterns,omitempty"`
	PageConfiguration       *ConfluencePageConfiguration       `json:"PageConfiguration,omitempty"`
	SecretArn               string                             `json:"SecretArn"`
	ServerURL               string                             `json:"ServerUrl"`
	SpaceConfiguration      *ConfluenceSpaceConfiguration      `json:"SpaceConfiguration,omitempty"`
	Version                 ConfluenceVersionEnum              `json:"Version"`
	VpcConfiguration        *DataSourceVpcConfiguration        `json:"VpcConfiguration,omitempty"`
}
