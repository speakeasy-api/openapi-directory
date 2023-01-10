package shared

// DistributionList
// A distribution list.
type DistributionList struct {
	IsTruncated bool
	Items       []DistributionSummaryList
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}
