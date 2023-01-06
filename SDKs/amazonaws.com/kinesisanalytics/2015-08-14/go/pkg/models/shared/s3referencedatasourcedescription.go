package shared

// S3ReferenceDataSourceDescription
// Provides the bucket name and object key name that stores the reference data.
type S3ReferenceDataSourceDescription struct {
	BucketARN        string `json:"BucketARN"`
	FileKey          string `json:"FileKey"`
	ReferenceRoleARN string `json:"ReferenceRoleARN"`
}
