package shared

// StreamingDistributionList
// A streaming distribution list.
type StreamingDistributionList struct {
	IsTruncated bool
	Items       []StreamingDistributionSummaryList
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}
