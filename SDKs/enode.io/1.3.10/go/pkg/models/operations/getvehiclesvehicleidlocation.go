// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/types"
)

type GetVehiclesVehicleidLocationSecurity struct {
	UserAccessToken  *string `security:"scheme,type=oauth2,name=Authorization"`
	UserAccessToken1 *string `security:"scheme,type=oauth2,name=Authorization"`
}

type GetVehiclesVehicleidLocationRequest struct {
	// ID of the Vehicle
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

// GetVehiclesVehicleidLocation200ApplicationJSON - Vehicle's GPS coordinates with timestamp
type GetVehiclesVehicleidLocation200ApplicationJSON struct {
	// ISO8601 UTC timestamp of last received location
	LastUpdated *types.Date `json:"lastUpdated,omitempty"`
	// Latitude in degrees
	Latitude *float64 `json:"latitude,omitempty"`
	// Longitude in degrees
	Longitude *float64 `json:"longitude,omitempty"`
}

type GetVehiclesVehicleidLocationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Vehicle's GPS coordinates with timestamp
	GetVehiclesVehicleidLocation200ApplicationJSONObject *GetVehiclesVehicleidLocation200ApplicationJSON
}
