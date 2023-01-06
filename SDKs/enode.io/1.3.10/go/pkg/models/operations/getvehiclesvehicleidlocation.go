package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetVehiclesVehicleidLocationPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type GetVehiclesVehicleidLocationSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

// GetVehiclesVehicleidLocation200ApplicationJSON
// Vehicle's GPS coordinates with timestamp
type GetVehiclesVehicleidLocation200ApplicationJSON struct {
	LastUpdated *time.Time `json:"lastUpdated,omitempty"`
	Latitude    *float64   `json:"latitude,omitempty"`
	Longitude   *float64   `json:"longitude,omitempty"`
}

type GetVehiclesVehicleidLocationRequest struct {
	PathParams GetVehiclesVehicleidLocationPathParams
	Security   GetVehiclesVehicleidLocationSecurity
}

type GetVehiclesVehicleidLocationResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetVehiclesVehicleidLocation200ApplicationJSONObject *GetVehiclesVehicleidLocation200ApplicationJSON
}
