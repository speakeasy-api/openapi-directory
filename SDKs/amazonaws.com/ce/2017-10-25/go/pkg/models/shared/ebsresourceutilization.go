package shared

// EbsResourceUtilization
// The EBS field that contains a list of EBS metrics that are associated with the current instance.
type EbsResourceUtilization struct {
	EbsReadBytesPerSecond  *string `json:"EbsReadBytesPerSecond,omitempty"`
	EbsReadOpsPerSecond    *string `json:"EbsReadOpsPerSecond,omitempty"`
	EbsWriteBytesPerSecond *string `json:"EbsWriteBytesPerSecond,omitempty"`
	EbsWriteOpsPerSecond   *string `json:"EbsWriteOpsPerSecond,omitempty"`
}
