package operations

import (
	"openapi/pkg/models/shared"
)

type PutVehiclesVehicleidSmartchargingpolicyPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type PutVehiclesVehicleidSmartchargingpolicyRequestBody struct {
	Deadline  *string `json:"deadline,omitempty"`
	IsEnabled *bool   `json:"isEnabled,omitempty"`
}

type PutVehiclesVehicleidSmartchargingpolicySecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type PutVehiclesVehicleidSmartchargingpolicyRequest struct {
	PathParams PutVehiclesVehicleidSmartchargingpolicyPathParams
	Request    *PutVehiclesVehicleidSmartchargingpolicyRequestBody `request:"mediaType=application/json"`
	Security   PutVehiclesVehicleidSmartchargingpolicySecurity
}

type PutVehiclesVehicleidSmartchargingpolicyResponse struct {
	ContentType                                                                                            string
	StatusCode                                                                                             int64
	Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema *shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema
}
