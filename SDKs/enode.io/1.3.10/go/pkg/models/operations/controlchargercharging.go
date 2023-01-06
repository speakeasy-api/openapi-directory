package operations

import (
	"openapi/pkg/models/shared"
)

type ControlChargerChargingPathParams struct {
	ChargerID string `pathParam:"style=simple,explode=false,name=chargerId"`
}

type ControlChargerChargingRequestBodyActionEnum string

const (
	ControlChargerChargingRequestBodyActionEnumStart ControlChargerChargingRequestBodyActionEnum = "START"
	ControlChargerChargingRequestBodyActionEnumStop  ControlChargerChargingRequestBodyActionEnum = "STOP"
)

type ControlChargerChargingRequestBody struct {
	Action ControlChargerChargingRequestBodyActionEnum `json:"action"`
}

type ControlChargerChargingSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type ControlChargerChargingRequest struct {
	PathParams ControlChargerChargingPathParams
	Request    *ControlChargerChargingRequestBody `request:"mediaType=application/json"`
	Security   ControlChargerChargingSecurity
}

type ControlChargerChargingResponse struct {
	ContentType string
	StatusCode  int64
}
