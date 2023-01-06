package shared

// SegmentLocation
// Specifies geographical dimension settings for a segment.
type SegmentLocation struct {
	Country  *SetDimension      `json:"Country,omitempty"`
	GPSPoint *GpsPointDimension `json:"GPSPoint,omitempty"`
}
