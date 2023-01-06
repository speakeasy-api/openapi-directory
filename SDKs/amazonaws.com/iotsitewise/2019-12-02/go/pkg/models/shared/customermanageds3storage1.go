package shared

// CustomerManagedS3Storage1
// Contains information about a customer managed Amazon S3 bucket.
type CustomerManagedS3Storage1 struct {
	RoleArn       string `json:"roleArn"`
	S3ResourceArn string `json:"s3ResourceArn"`
}
