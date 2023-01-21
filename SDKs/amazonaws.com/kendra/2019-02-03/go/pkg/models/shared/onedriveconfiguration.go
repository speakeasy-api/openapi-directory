package shared

// OneDriveConfiguration
// Provides configuration information for data sources that connect to OneDrive.
type OneDriveConfiguration struct {
	DisableLocalGroups *bool                           `json:"DisableLocalGroups,omitempty"`
	ExclusionPatterns  []string                        `json:"ExclusionPatterns,omitempty"`
	FieldMappings      []DataSourceToIndexFieldMapping `json:"FieldMappings,omitempty"`
	InclusionPatterns  []string                        `json:"InclusionPatterns,omitempty"`
	OneDriveUsers      OneDriveUsers                   `json:"OneDriveUsers"`
	SecretArn          string                          `json:"SecretArn"`
	TenantDomain       string                          `json:"TenantDomain"`
}
