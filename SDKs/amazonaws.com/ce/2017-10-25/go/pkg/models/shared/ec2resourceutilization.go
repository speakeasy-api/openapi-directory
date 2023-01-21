package shared

// Ec2ResourceUtilization
// Utilization metrics of the instance.
type Ec2ResourceUtilization struct {
	DiskResourceUtilization         *DiskResourceUtilization    `json:"DiskResourceUtilization,omitempty"`
	EBSResourceUtilization          *EbsResourceUtilization     `json:"EBSResourceUtilization,omitempty"`
	MaxCPUUtilizationPercentage     *string                     `json:"MaxCpuUtilizationPercentage,omitempty"`
	MaxMemoryUtilizationPercentage  *string                     `json:"MaxMemoryUtilizationPercentage,omitempty"`
	MaxStorageUtilizationPercentage *string                     `json:"MaxStorageUtilizationPercentage,omitempty"`
	NetworkResourceUtilization      *NetworkResourceUtilization `json:"NetworkResourceUtilization,omitempty"`
}
