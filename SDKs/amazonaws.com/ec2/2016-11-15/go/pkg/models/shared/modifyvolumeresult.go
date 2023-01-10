package shared

// ModifyVolumeResultVolumeModification
// Information about the volume modification.
type ModifyVolumeResultVolumeModification struct {
	EndTime                    map[string]interface{}
	ModificationState          map[string]interface{}
	OriginalIops               map[string]interface{}
	OriginalMultiAttachEnabled map[string]interface{}
	OriginalSize               map[string]interface{}
	OriginalThroughput         map[string]interface{}
	OriginalVolumeType         map[string]interface{}
	Progress                   map[string]interface{}
	StartTime                  map[string]interface{}
	StatusMessage              map[string]interface{}
	TargetIops                 map[string]interface{}
	TargetMultiAttachEnabled   map[string]interface{}
	TargetSize                 map[string]interface{}
	TargetThroughput           map[string]interface{}
	TargetVolumeType           map[string]interface{}
	VolumeID                   map[string]interface{}
}

type ModifyVolumeResult struct {
	VolumeModification *ModifyVolumeResultVolumeModification
}
