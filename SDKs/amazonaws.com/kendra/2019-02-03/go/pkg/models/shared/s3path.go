package shared

// S3Path
// Information required to find a specific file in an Amazon S3 bucket.
type S3Path struct {
	Bucket string `json:"Bucket"`
	Key    string `json:"Key"`
}
