package shared

type ImportImageResult struct {
	Architecture          map[string]interface{}
	Description           map[string]interface{}
	Encrypted             map[string]interface{}
	Hypervisor            map[string]interface{}
	ImageID               map[string]interface{}
	ImportTaskID          map[string]interface{}
	KmsKeyID              map[string]interface{}
	LicenseSpecifications map[string]interface{}
	LicenseType           map[string]interface{}
	Platform              map[string]interface{}
	Progress              map[string]interface{}
	SnapshotDetails       map[string]interface{}
	Status                map[string]interface{}
	StatusMessage         map[string]interface{}
	Tags                  map[string]interface{}
	UsageOperation        map[string]interface{}
}
