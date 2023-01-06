package shared

// ListStreamingDistributionsResultStreamingDistributionList
// A streaming distribution list.
type ListStreamingDistributionsResultStreamingDistributionList struct {
	IsTruncated bool
	Items       []map[string]interface{}
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}

// ListStreamingDistributionsResult
// The returned result of the corresponding request.
type ListStreamingDistributionsResult struct {
	StreamingDistributionList *ListStreamingDistributionsResultStreamingDistributionList
}
