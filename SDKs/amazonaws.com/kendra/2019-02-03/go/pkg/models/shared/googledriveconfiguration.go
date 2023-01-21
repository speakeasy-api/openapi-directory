package shared

// GoogleDriveConfiguration
// Provides configuration information for data sources that connect to Google Drive.
type GoogleDriveConfiguration struct {
	ExcludeMimeTypes    []string                        `json:"ExcludeMimeTypes,omitempty"`
	ExcludeSharedDrives []string                        `json:"ExcludeSharedDrives,omitempty"`
	ExcludeUserAccounts []string                        `json:"ExcludeUserAccounts,omitempty"`
	ExclusionPatterns   []string                        `json:"ExclusionPatterns,omitempty"`
	FieldMappings       []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	InclusionPatterns   []string                        `json:"InclusionPatterns,omitempty"`
	SecretArn           string                          `json:"SecretArn"`
}
