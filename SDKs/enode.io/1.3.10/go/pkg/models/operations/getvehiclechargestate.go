package operations

import (
	"openapi/pkg/models/shared"
)

type GetVehicleChargestatePathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type GetVehicleChargestateSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnum string

const (
	GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnumUnknown GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnum = ""
	GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnumDefault GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnum = "DEFAULT"
)

type GetVehicleChargestate200ApplicationJSON struct {
	BatteryCapacity     *float64                                                       `json:"batteryCapacity,omitempty"`
	BatteryLevel        *float64                                                       `json:"batteryLevel,omitempty"`
	ChargeLimit         *float64                                                       `json:"chargeLimit,omitempty"`
	ChargeRate          *float64                                                       `json:"chargeRate,omitempty"`
	ChargeTimeRemaining *float64                                                       `json:"chargeTimeRemaining,omitempty"`
	IsCharging          *bool                                                          `json:"isCharging,omitempty"`
	IsChargingReasons   []GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnum `json:"isChargingReasons,omitempty"`
	IsPluggedIn         *bool                                                          `json:"isPluggedIn,omitempty"`
	Range               *float64                                                       `json:"range,omitempty"`
}

type GetVehicleChargestateRequest struct {
	PathParams GetVehicleChargestatePathParams
	Security   GetVehicleChargestateSecurity
}

type GetVehicleChargestateResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetVehicleChargestate200ApplicationJSONObject *GetVehicleChargestate200ApplicationJSON
}
