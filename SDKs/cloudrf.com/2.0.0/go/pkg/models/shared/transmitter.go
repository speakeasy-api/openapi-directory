package shared

type Transmitter struct {
	Alt *float32 `json:"alt,omitempty"`
	Bwi *float32 `json:"bwi,omitempty"`
	Frq *float32 `json:"frq,omitempty"`
	Lat *float32 `json:"lat,omitempty"`
	Lon *float32 `json:"lon,omitempty"`
	Txw *float32 `json:"txw,omitempty"`
}
