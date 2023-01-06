package shared

// Encryption
// Contains information about the encryption used to store the job results in Amazon S3.
type Encryption struct {
	EncryptionType *EncryptionTypeEnum `json:"EncryptionType,omitempty"`
	KMSContext     *string             `json:"KMSContext,omitempty"`
	KMSKeyID       *string             `json:"KMSKeyId,omitempty"`
}
