package shared

// ResultConfigurationUpdatesEncryptionConfiguration
// If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
type ResultConfigurationUpdatesEncryptionConfiguration struct {
	EncryptionOption EncryptionOptionEnum `json:"EncryptionOption"`
	KmsKey           *string              `json:"KmsKey,omitempty"`
}

// ResultConfigurationUpdates
// The information about the updates in the query results, such as output location and encryption configuration for the query results.
type ResultConfigurationUpdates struct {
	EncryptionConfiguration       *ResultConfigurationUpdatesEncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
	OutputLocation                *string                                            `json:"OutputLocation,omitempty"`
	RemoveEncryptionConfiguration *bool                                              `json:"RemoveEncryptionConfiguration,omitempty"`
	RemoveOutputLocation          *bool                                              `json:"RemoveOutputLocation,omitempty"`
}
