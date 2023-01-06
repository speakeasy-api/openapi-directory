package shared

// ResourceConfiguration
// The configuration of the resource used to execute the <code>containerAction</code>.
type ResourceConfiguration struct {
	ComputeType    ComputeTypeEnum `json:"computeType"`
	VolumeSizeInGB int64           `json:"volumeSizeInGB"`
}
