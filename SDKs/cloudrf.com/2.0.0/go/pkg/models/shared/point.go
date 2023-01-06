package shared

type Point struct {
	Alt *float32 `json:"alt,omitempty"`
	Lat *float32 `json:"lat,omitempty"`
	Lon *float32 `json:"lon,omitempty"`
}
