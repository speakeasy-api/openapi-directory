package shared

// CustomerManagedS3Storage
// Contains information about a customer managed Amazon S3 bucket.
type CustomerManagedS3Storage struct {
	RoleArn       map[string]interface{} `json:"roleArn"`
	S3ResourceArn string                 `json:"s3ResourceArn"`
}
