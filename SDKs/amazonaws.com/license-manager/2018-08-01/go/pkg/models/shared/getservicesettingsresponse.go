// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GetServiceSettingsResponse - Success
type GetServiceSettingsResponse struct {
	EnableCrossAccountsDiscovery   *bool                      `json:"EnableCrossAccountsDiscovery,omitempty"`
	LicenseManagerResourceShareArn *string                    `json:"LicenseManagerResourceShareArn,omitempty"`
	OrganizationConfiguration      *OrganizationConfiguration `json:"OrganizationConfiguration,omitempty"`
	S3BucketArn                    *string                    `json:"S3BucketArn,omitempty"`
	SnsTopicArn                    *string                    `json:"SnsTopicArn,omitempty"`
}
