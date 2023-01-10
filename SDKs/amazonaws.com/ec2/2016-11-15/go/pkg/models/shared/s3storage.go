package shared

// S3Storage
// Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
type S3Storage struct {
	AWSAccessKeyID        *string
	Bucket                map[string]interface{}
	Prefix                map[string]interface{}
	UploadPolicy          map[string]interface{}
	UploadPolicySignature map[string]interface{}
}
