package operations

import (
	"openapi/pkg/models/shared"
)

type GetVehiclesVehicleidSmartchargingpolicyPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type GetVehiclesVehicleidSmartchargingpolicySecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetVehiclesVehicleidSmartchargingpolicyRequest struct {
	PathParams GetVehiclesVehicleidSmartchargingpolicyPathParams
	Security   GetVehiclesVehicleidSmartchargingpolicySecurity
}

type GetVehiclesVehicleidSmartchargingpolicyResponse struct {
	ContentType                                                                                            string
	StatusCode                                                                                             int64
	Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema *shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema
}
