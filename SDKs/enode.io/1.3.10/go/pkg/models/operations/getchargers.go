package operations

import (
	"openapi/pkg/models/shared"
)

type GetChargersFieldEnum string

const (
	GetChargersFieldEnumChargeState GetChargersFieldEnum = "chargeState"
	GetChargersFieldEnumLocation    GetChargersFieldEnum = "location"
)

type GetChargersQueryParams struct {
	Field []GetChargersFieldEnum `queryParam:"style=form,explode=true,name=field[]"`
}

type GetChargersSecurity struct {
	UserAccessToken  *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken1 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
	UserAccessToken2 *shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type GetChargersRequest struct {
	QueryParams GetChargersQueryParams
	Security    GetChargersSecurity
}

type GetChargersResponse struct {
	ContentType                                                                          string
	StatusCode                                                                           int64
	Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemas []shared.Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchema
}
