package operations

import (
	"openapi/pkg/models/shared"
)

type GetVehiclesVehicleidInformationPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type GetVehiclesVehicleidInformationSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

// GetVehiclesVehicleidInformation200ApplicationJSON
// Descriptive information about the Vehicle
type GetVehiclesVehicleidInformation200ApplicationJSON struct {
	Brand *string `json:"brand,omitempty"`
	ID    *string `json:"id,omitempty"`
	Model *string `json:"model,omitempty"`
	Year  *int64  `json:"year,omitempty"`
}

type GetVehiclesVehicleidInformationRequest struct {
	PathParams GetVehiclesVehicleidInformationPathParams
	Security   GetVehiclesVehicleidInformationSecurity
}

type GetVehiclesVehicleidInformationResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetVehiclesVehicleidInformation200ApplicationJSONObject *GetVehiclesVehicleidInformation200ApplicationJSON
}
