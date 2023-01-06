package shared

// InputDataConfig1
// The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.
type InputDataConfig1 struct {
	S3Bucket string  `json:"S3Bucket"`
	S3Key    *string `json:"S3Key,omitempty"`
}
