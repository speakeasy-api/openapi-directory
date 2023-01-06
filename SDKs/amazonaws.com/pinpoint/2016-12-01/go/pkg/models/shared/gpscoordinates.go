package shared

// GpsCoordinates
// Specifies the GPS coordinates of a location.
type GpsCoordinates struct {
	Latitude  map[string]interface{} `json:"Latitude"`
	Longitude float64                `json:"Longitude"`
}
