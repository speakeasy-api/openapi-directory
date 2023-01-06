package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetVehiclesVehicleidPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type GetVehiclesVehicleidFieldEnum string

const (
	GetVehiclesVehicleidFieldEnumSmartChargingPolicy GetVehiclesVehicleidFieldEnum = "smartChargingPolicy"
	GetVehiclesVehicleidFieldEnumChargeState         GetVehiclesVehicleidFieldEnum = "chargeState"
	GetVehiclesVehicleidFieldEnumLocation            GetVehiclesVehicleidFieldEnum = "location"
	GetVehiclesVehicleidFieldEnumInformation         GetVehiclesVehicleidFieldEnum = "information"
	GetVehiclesVehicleidFieldEnumOdometer            GetVehiclesVehicleidFieldEnum = "odometer"
)

type GetVehiclesVehicleidQueryParams struct {
	Field []GetVehiclesVehicleidFieldEnum `queryParam:"style=form,explode=true,name=field[]"`
}

type GetVehiclesVehicleidSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken2 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken3 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken4 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken5 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetVehiclesVehicleid200ApplicationJSON struct {
	ChargeState         *shared.Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema        `json:"chargeState,omitempty"`
	ChargingLocationID  string                                                                                                         `json:"chargingLocationId"`
	ID                  string                                                                                                         `json:"id"`
	Information         *shared.Onevehicles1Percent7BvehicleIDPercent7D1informationGetResponses200ContentApplication1jsonSchema        `json:"information,omitempty"`
	IsReachable         bool                                                                                                           `json:"isReachable"`
	LastSeen            time.Time                                                                                                      `json:"lastSeen"`
	Location            *shared.Onevehicles1Percent7BvehicleIDPercent7D1locationGetResponses200ContentApplication1jsonSchema           `json:"location,omitempty"`
	Odometer            *shared.Onevehicles1Percent7BvehicleIDPercent7D1odometerGetResponses200ContentApplication1jsonSchema           `json:"odometer,omitempty"`
	SmartChargingPolicy *shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema `json:"smartChargingPolicy,omitempty"`
}

type GetVehiclesVehicleidRequest struct {
	PathParams  GetVehiclesVehicleidPathParams
	QueryParams GetVehiclesVehicleidQueryParams
	Security    GetVehiclesVehicleidSecurity
}

type GetVehiclesVehicleidResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetVehiclesVehicleid200ApplicationJSONObject *GetVehiclesVehicleid200ApplicationJSON
}
