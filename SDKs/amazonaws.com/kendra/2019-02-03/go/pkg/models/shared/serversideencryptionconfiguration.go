package shared

// ServerSideEncryptionConfiguration
// Provides the identifier of the KMScustomer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.
type ServerSideEncryptionConfiguration struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
}
