package shared

type ExportImageResult struct {
	Description       map[string]interface{}
	DiskImageFormat   map[string]interface{}
	ExportImageTaskID map[string]interface{}
	ImageID           map[string]interface{}
	Progress          map[string]interface{}
	RoleName          map[string]interface{}
	S3ExportLocation  map[string]interface{}
	Status            map[string]interface{}
	StatusMessage     map[string]interface{}
	Tags              map[string]interface{}
}
