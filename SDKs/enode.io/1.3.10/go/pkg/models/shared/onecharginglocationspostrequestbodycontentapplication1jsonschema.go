package shared

type OnechargingLocationsPostRequestBodyContentApplication1jsonSchema struct {
	ID        string   `json:"id"`
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name      *string  `json:"name,omitempty"`
}

type OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name      *string  `json:"name,omitempty"`
}
