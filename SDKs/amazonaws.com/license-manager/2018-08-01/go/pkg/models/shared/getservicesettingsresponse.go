package shared

// GetServiceSettingsResponseOrganizationConfiguration
// Configuration information for AWS Organizations.
type GetServiceSettingsResponseOrganizationConfiguration struct {
	EnableIntegration bool `json:"EnableIntegration"`
}

type GetServiceSettingsResponse struct {
	EnableCrossAccountsDiscovery   *bool                                                `json:"EnableCrossAccountsDiscovery,omitempty"`
	LicenseManagerResourceShareArn *string                                              `json:"LicenseManagerResourceShareArn,omitempty"`
	OrganizationConfiguration      *GetServiceSettingsResponseOrganizationConfiguration `json:"OrganizationConfiguration,omitempty"`
	S3BucketArn                    *string                                              `json:"S3BucketArn,omitempty"`
	SnsTopicArn                    *string                                              `json:"SnsTopicArn,omitempty"`
}
