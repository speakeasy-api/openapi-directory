package shared

// StreamingDistributionList
// A streaming distribution list.
type StreamingDistributionList struct {
	IsTruncated bool
	Items       []map[string]interface{}
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}
