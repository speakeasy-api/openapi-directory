package shared

// SegmentLocation1
// Specifies geographical dimension settings for a segment.
type SegmentLocation1 struct {
	Country  *SetDimension       `json:"Country,omitempty"`
	GPSPoint *GpsPointDimension1 `json:"GPSPoint,omitempty"`
}
