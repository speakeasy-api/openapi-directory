package shared

// ExportImageResultS3ExportLocation
// Information about the destination Amazon S3 bucket.
type ExportImageResultS3ExportLocation struct {
	S3Bucket map[string]interface{}
	S3Prefix map[string]interface{}
}

type ExportImageResult struct {
	Description       map[string]interface{}
	DiskImageFormat   map[string]interface{}
	ExportImageTaskID map[string]interface{}
	ImageID           map[string]interface{}
	Progress          map[string]interface{}
	RoleName          map[string]interface{}
	S3ExportLocation  *ExportImageResultS3ExportLocation
	Status            map[string]interface{}
	StatusMessage     map[string]interface{}
	Tags              map[string]interface{}
}
