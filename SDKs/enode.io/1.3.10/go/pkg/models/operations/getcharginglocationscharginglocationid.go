package operations

import (
	"openapi/pkg/models/shared"
)

type GetCharginglocationsCharginglocationidPathParams struct {
	ChargingLocationID string `pathParam:"style=simple,explode=false,name=chargingLocationId"`
}

type GetCharginglocationsCharginglocationidSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetCharginglocationsCharginglocationidRequest struct {
	PathParams GetCharginglocationsCharginglocationidPathParams
	Security   GetCharginglocationsCharginglocationidSecurity
}

type GetCharginglocationsCharginglocationidResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	OnechargingLocationsPostRequestBodyContentApplication1jsonSchema *shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema
}
