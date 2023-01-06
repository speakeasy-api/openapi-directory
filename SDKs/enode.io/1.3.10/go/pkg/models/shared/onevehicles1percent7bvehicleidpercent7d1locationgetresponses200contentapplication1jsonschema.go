package shared

import (
	"time"
)

// Onevehicles1Percent7BvehicleIDPercent7D1locationGetResponses200ContentApplication1jsonSchema
// Vehicle's GPS coordinates with timestamp
type Onevehicles1Percent7BvehicleIDPercent7D1locationGetResponses200ContentApplication1jsonSchema struct {
	LastUpdated *time.Time `json:"lastUpdated,omitempty"`
	Latitude    *float64   `json:"latitude,omitempty"`
	Longitude   *float64   `json:"longitude,omitempty"`
}
