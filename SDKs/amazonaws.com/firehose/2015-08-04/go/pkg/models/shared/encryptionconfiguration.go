package shared

// EncryptionConfiguration
// Describes the encryption for a destination in Amazon S3.
type EncryptionConfiguration struct {
	KMSEncryptionConfig *KmsEncryptionConfig    `json:"KMSEncryptionConfig,omitempty"`
	NoEncryptionConfig  *NoEncryptionConfigEnum `json:"NoEncryptionConfig,omitempty"`
}
