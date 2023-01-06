package shared

// KmsEncryptionConfig
// Describes an encryption key for a destination in Amazon S3.
type KmsEncryptionConfig struct {
	AWSKMSKeyARN string `json:"AWSKMSKeyARN"`
}
