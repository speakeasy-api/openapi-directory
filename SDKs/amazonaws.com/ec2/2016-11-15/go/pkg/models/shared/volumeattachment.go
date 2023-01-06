package shared

// VolumeAttachment
// Describes volume attachment details.
type VolumeAttachment struct {
	AttachTime          map[string]interface{}
	DeleteOnTermination map[string]interface{}
	Device              map[string]interface{}
	InstanceID          map[string]interface{}
	State               map[string]interface{}
	VolumeID            map[string]interface{}
}
