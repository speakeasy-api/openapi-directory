package shared

type FindingReasonCodeEnum string

const (
	FindingReasonCodeEnumCPUOverProvisioned               FindingReasonCodeEnum = "CPU_OVER_PROVISIONED"
	FindingReasonCodeEnumCPUUnderProvisioned              FindingReasonCodeEnum = "CPU_UNDER_PROVISIONED"
	FindingReasonCodeEnumMemoryOverProvisioned            FindingReasonCodeEnum = "MEMORY_OVER_PROVISIONED"
	FindingReasonCodeEnumMemoryUnderProvisioned           FindingReasonCodeEnum = "MEMORY_UNDER_PROVISIONED"
	FindingReasonCodeEnumEbsThroughputOverProvisioned     FindingReasonCodeEnum = "EBS_THROUGHPUT_OVER_PROVISIONED"
	FindingReasonCodeEnumEbsThroughputUnderProvisioned    FindingReasonCodeEnum = "EBS_THROUGHPUT_UNDER_PROVISIONED"
	FindingReasonCodeEnumEbsIopsOverProvisioned           FindingReasonCodeEnum = "EBS_IOPS_OVER_PROVISIONED"
	FindingReasonCodeEnumEbsIopsUnderProvisioned          FindingReasonCodeEnum = "EBS_IOPS_UNDER_PROVISIONED"
	FindingReasonCodeEnumNetworkBandwidthOverProvisioned  FindingReasonCodeEnum = "NETWORK_BANDWIDTH_OVER_PROVISIONED"
	FindingReasonCodeEnumNetworkBandwidthUnderProvisioned FindingReasonCodeEnum = "NETWORK_BANDWIDTH_UNDER_PROVISIONED"
	FindingReasonCodeEnumNetworkPpsOverProvisioned        FindingReasonCodeEnum = "NETWORK_PPS_OVER_PROVISIONED"
	FindingReasonCodeEnumNetworkPpsUnderProvisioned       FindingReasonCodeEnum = "NETWORK_PPS_UNDER_PROVISIONED"
	FindingReasonCodeEnumDiskIopsOverProvisioned          FindingReasonCodeEnum = "DISK_IOPS_OVER_PROVISIONED"
	FindingReasonCodeEnumDiskIopsUnderProvisioned         FindingReasonCodeEnum = "DISK_IOPS_UNDER_PROVISIONED"
	FindingReasonCodeEnumDiskThroughputOverProvisioned    FindingReasonCodeEnum = "DISK_THROUGHPUT_OVER_PROVISIONED"
	FindingReasonCodeEnumDiskThroughputUnderProvisioned   FindingReasonCodeEnum = "DISK_THROUGHPUT_UNDER_PROVISIONED"
)
