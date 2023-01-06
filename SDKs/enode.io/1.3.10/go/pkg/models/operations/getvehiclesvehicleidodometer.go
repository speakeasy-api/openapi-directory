package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetVehiclesVehicleidOdometerPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type GetVehiclesVehicleidOdometerSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

// GetVehiclesVehicleidOdometer200ApplicationJSON
// Vehicle's odometer with timestamp
type GetVehiclesVehicleidOdometer200ApplicationJSON struct {
	Distance    *float64   `json:"distance,omitempty"`
	LastUpdated *time.Time `json:"lastUpdated,omitempty"`
}

type GetVehiclesVehicleidOdometerRequest struct {
	PathParams GetVehiclesVehicleidOdometerPathParams
	Security   GetVehiclesVehicleidOdometerSecurity
}

type GetVehiclesVehicleidOdometerResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetVehiclesVehicleidOdometer200ApplicationJSONObject *GetVehiclesVehicleidOdometer200ApplicationJSON
}
