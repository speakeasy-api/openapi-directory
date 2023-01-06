package shared

type Receiver struct {
	Alt *float32 `json:"alt,omitempty"`
	Lat *float32 `json:"lat,omitempty"`
	Lon *float32 `json:"lon,omitempty"`
	Rxg *float32 `json:"rxg,omitempty"`
	Rxs *float32 `json:"rxs,omitempty"`
}
