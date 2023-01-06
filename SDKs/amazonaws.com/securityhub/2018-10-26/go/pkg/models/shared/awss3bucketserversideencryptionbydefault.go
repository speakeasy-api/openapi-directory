package shared

// AwsS3BucketServerSideEncryptionByDefault
// Specifies the default server-side encryption to apply to new objects in the bucket.
type AwsS3BucketServerSideEncryptionByDefault struct {
	KMSMasterKeyID *string `json:"KMSMasterKeyID,omitempty"`
	SSEAlgorithm   *string `json:"SSEAlgorithm,omitempty"`
}
