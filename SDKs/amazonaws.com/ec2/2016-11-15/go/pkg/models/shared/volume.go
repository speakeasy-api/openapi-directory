package shared

// Volume
// Describes a volume.
type Volume struct {
	Attachments        map[string]interface{}
	AvailabilityZone   map[string]interface{}
	CreateTime         map[string]interface{}
	Encrypted          map[string]interface{}
	FastRestored       map[string]interface{}
	Iops               map[string]interface{}
	KmsKeyID           map[string]interface{}
	MultiAttachEnabled map[string]interface{}
	OutpostArn         map[string]interface{}
	Size               map[string]interface{}
	SnapshotID         map[string]interface{}
	State              map[string]interface{}
	Tags               map[string]interface{}
	Throughput         map[string]interface{}
	VolumeID           map[string]interface{}
	VolumeType         map[string]interface{}
}
