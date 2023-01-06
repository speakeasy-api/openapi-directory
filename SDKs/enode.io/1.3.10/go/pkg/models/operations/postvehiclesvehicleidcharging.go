package operations

import (
	"openapi/pkg/models/shared"
)

type PostVehiclesVehicleidChargingPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type PostVehiclesVehicleidChargingSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type PostVehiclesVehicleidChargingRequest struct {
	PathParams PostVehiclesVehicleidChargingPathParams
	Security   PostVehiclesVehicleidChargingSecurity
}

type PostVehiclesVehicleidChargingResponse struct {
	ContentType string
	StatusCode  int64
}
