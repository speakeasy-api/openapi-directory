package shared

// EncryptionConfigProvider
// Identifies the Key Management Service (KMS) key used to encrypt the secrets.
type EncryptionConfigProvider struct {
	KeyArn *string `json:"keyArn,omitempty"`
}

// EncryptionConfig
// The encryption configuration for the cluster.
type EncryptionConfig struct {
	Provider  *EncryptionConfigProvider `json:"provider,omitempty"`
	Resources []string                  `json:"resources,omitempty"`
}
