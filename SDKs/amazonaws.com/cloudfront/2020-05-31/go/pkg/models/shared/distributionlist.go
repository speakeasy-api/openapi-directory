package shared

// DistributionList
// A distribution list.
type DistributionList struct {
	IsTruncated bool
	Items       []map[string]interface{}
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}
