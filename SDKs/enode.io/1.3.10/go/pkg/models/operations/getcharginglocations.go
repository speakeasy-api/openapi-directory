package operations

import (
	"openapi/pkg/models/shared"
)

type GetCharginglocationsSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetCharginglocationsRequest struct {
	Security GetCharginglocationsSecurity
}

type GetCharginglocationsResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	OnechargingLocationsPostRequestBodyContentApplication1jsonSchemas []shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema
}
