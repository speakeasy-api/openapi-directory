package shared

// Snapshot
// Describes a snapshot.
type Snapshot struct {
	DataEncryptionKeyID map[string]interface{}
	Description         map[string]interface{}
	Encrypted           map[string]interface{}
	KmsKeyID            map[string]interface{}
	OutpostArn          map[string]interface{}
	OwnerAlias          map[string]interface{}
	OwnerID             map[string]interface{}
	Progress            map[string]interface{}
	SnapshotID          map[string]interface{}
	StartTime           map[string]interface{}
	State               map[string]interface{}
	StateMessage        map[string]interface{}
	Tags                map[string]interface{}
	VolumeID            map[string]interface{}
	VolumeSize          map[string]interface{}
}
