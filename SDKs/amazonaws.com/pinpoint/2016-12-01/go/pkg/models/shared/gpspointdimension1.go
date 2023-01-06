package shared

// GpsPointDimension1
// Specifies GPS-based criteria for including or excluding endpoints from a segment.
type GpsPointDimension1 struct {
	Coordinates       GpsCoordinates1 `json:"Coordinates"`
	RangeInKilometers *float64        `json:"RangeInKilometers,omitempty"`
}
