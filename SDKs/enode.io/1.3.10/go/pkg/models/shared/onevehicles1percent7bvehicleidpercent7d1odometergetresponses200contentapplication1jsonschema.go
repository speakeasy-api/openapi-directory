package shared

import (
	"time"
)

// Onevehicles1Percent7BvehicleIDPercent7D1odometerGetResponses200ContentApplication1jsonSchema
// Vehicle's odometer with timestamp
type Onevehicles1Percent7BvehicleIDPercent7D1odometerGetResponses200ContentApplication1jsonSchema struct {
	Distance    *float64   `json:"distance,omitempty"`
	LastUpdated *time.Time `json:"lastUpdated,omitempty"`
}
