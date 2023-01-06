package operations

import (
	"openapi/pkg/models/shared"
)

type CustomInsurancePlanNamesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
	User     *int64  `queryParam:"style=form,explode=true,name=user"`
}

type CustomInsurancePlanNamesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CustomInsurancePlanNamesList200ApplicationJSON
// Paginated Result
type CustomInsurancePlanNamesList200ApplicationJSON struct {
	Data     []shared.CustomInsurancePlanName `json:"data,omitempty"`
	Next     *string                          `json:"next,omitempty"`
	Previous *string                          `json:"previous,omitempty"`
}

type CustomInsurancePlanNamesListRequest struct {
	QueryParams CustomInsurancePlanNamesListQueryParams
	Security    CustomInsurancePlanNamesListSecurity
}

type CustomInsurancePlanNamesListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	CustomInsurancePlanNamesList200ApplicationJSONObject *CustomInsurancePlanNamesList200ApplicationJSON
}
