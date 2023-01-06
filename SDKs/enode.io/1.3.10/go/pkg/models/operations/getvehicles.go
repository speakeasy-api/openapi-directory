package operations

import (
	"openapi/pkg/models/shared"
)

type GetVehiclesQueryParams struct {
	Field []interface{} `queryParam:"style=form,explode=true,name=field[]"`
}

type GetVehiclesSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken2 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken3 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken4 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken5 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetVehiclesRequest struct {
	QueryParams GetVehiclesQueryParams
	Security    GetVehiclesSecurity
}

type GetVehiclesResponse struct {
	ContentType                                                                          string
	StatusCode                                                                           int64
	Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchemas []shared.Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchema
}
