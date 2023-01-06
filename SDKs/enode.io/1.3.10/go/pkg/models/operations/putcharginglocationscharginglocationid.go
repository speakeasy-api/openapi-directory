package operations

import (
	"openapi/pkg/models/shared"
)

type PutCharginglocationsCharginglocationidPathParams struct {
	ChargingLocationID string `pathParam:"style=simple,explode=false,name=chargingLocationId"`
}

type PutCharginglocationsCharginglocationidSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type PutCharginglocationsCharginglocationidRequest struct {
	PathParams PutCharginglocationsCharginglocationidPathParams
	Request    *shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput `request:"mediaType=application/json"`
	Security   PutCharginglocationsCharginglocationidSecurity
}

type PutCharginglocationsCharginglocationidResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	OnechargingLocationsPostRequestBodyContentApplication1jsonSchema *shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema
}
