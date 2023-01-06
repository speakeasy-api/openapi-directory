package shared

type EbsMetricNameEnum string

const (
	EBSMetricNameEnumVolumeReadOpsPerSecond    EbsMetricNameEnum = "VolumeReadOpsPerSecond"
	EBSMetricNameEnumVolumeWriteOpsPerSecond   EbsMetricNameEnum = "VolumeWriteOpsPerSecond"
	EBSMetricNameEnumVolumeReadBytesPerSecond  EbsMetricNameEnum = "VolumeReadBytesPerSecond"
	EBSMetricNameEnumVolumeWriteBytesPerSecond EbsMetricNameEnum = "VolumeWriteBytesPerSecond"
)
