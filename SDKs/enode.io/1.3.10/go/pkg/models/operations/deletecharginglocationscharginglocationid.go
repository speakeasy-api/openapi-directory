package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCharginglocationsCharginglocationidPathParams struct {
	ChargingLocationID string `pathParam:"style=simple,explode=false,name=chargingLocationId"`
}

type DeleteCharginglocationsCharginglocationidSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type DeleteCharginglocationsCharginglocationidRequest struct {
	PathParams DeleteCharginglocationsCharginglocationidPathParams
	Security   DeleteCharginglocationsCharginglocationidSecurity
}

type DeleteCharginglocationsCharginglocationidResponse struct {
	ContentType string
	StatusCode  int64
}
