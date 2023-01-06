package shared

// VolumeConfiguration
// Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
type VolumeConfiguration struct {
	VolumeBaselineIOPS       *int64  `json:"volumeBaselineIOPS,omitempty"`
	VolumeBaselineThroughput *int64  `json:"volumeBaselineThroughput,omitempty"`
	VolumeBurstIOPS          *int64  `json:"volumeBurstIOPS,omitempty"`
	VolumeBurstThroughput    *int64  `json:"volumeBurstThroughput,omitempty"`
	VolumeSize               *int64  `json:"volumeSize,omitempty"`
	VolumeType               *string `json:"volumeType,omitempty"`
}
