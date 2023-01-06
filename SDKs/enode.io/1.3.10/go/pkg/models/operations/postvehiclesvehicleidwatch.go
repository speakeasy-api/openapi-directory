package operations

import (
	"openapi/pkg/models/shared"
)

type PostVehiclesVehicleidWatchPathParams struct {
	VehicleID string `pathParam:"style=simple,explode=false,name=vehicleId"`
}

type PostVehiclesVehicleidWatchRequestBodyPropertiesEnum string

const (
	PostVehiclesVehicleidWatchRequestBodyPropertiesEnumBatteryLevel      PostVehiclesVehicleidWatchRequestBodyPropertiesEnum = "BATTERY_LEVEL"
	PostVehiclesVehicleidWatchRequestBodyPropertiesEnumRange             PostVehiclesVehicleidWatchRequestBodyPropertiesEnum = "RANGE"
	PostVehiclesVehicleidWatchRequestBodyPropertiesEnumIsPluggedIn       PostVehiclesVehicleidWatchRequestBodyPropertiesEnum = "IS_PLUGGED_IN"
	PostVehiclesVehicleidWatchRequestBodyPropertiesEnumIsCharging        PostVehiclesVehicleidWatchRequestBodyPropertiesEnum = "IS_CHARGING"
	PostVehiclesVehicleidWatchRequestBodyPropertiesEnumIsChargingReasons PostVehiclesVehicleidWatchRequestBodyPropertiesEnum = "IS_CHARGING_REASONS"
	PostVehiclesVehicleidWatchRequestBodyPropertiesEnumLocation          PostVehiclesVehicleidWatchRequestBodyPropertiesEnum = "LOCATION"
)

type PostVehiclesVehicleidWatchRequestBody struct {
	Properties *PostVehiclesVehicleidWatchRequestBodyPropertiesEnum `json:"properties,omitempty"`
}

type PostVehiclesVehicleidWatchSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken2 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type PostVehiclesVehicleidWatchRequest struct {
	PathParams PostVehiclesVehicleidWatchPathParams
	Request    *PostVehiclesVehicleidWatchRequestBody `request:"mediaType=application/json"`
	Security   PostVehiclesVehicleidWatchSecurity
}

type PostVehiclesVehicleidWatchResponse struct {
	ContentType                                                                               string
	StatusCode                                                                                int64
	Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema *shared.Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema
}
