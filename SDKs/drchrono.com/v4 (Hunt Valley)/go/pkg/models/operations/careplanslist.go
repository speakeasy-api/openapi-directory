package operations

import (
	"openapi/pkg/models/shared"
)

type CarePlansListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	PlanType *int64  `queryParam:"style=form,explode=true,name=plan_type"`
}

type CarePlansListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CarePlansList200ApplicationJSON
// Paginated Result
type CarePlansList200ApplicationJSON struct {
	Data     []shared.CarePlan `json:"data,omitempty"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
}

type CarePlansListRequest struct {
	QueryParams CarePlansListQueryParams
	Security    CarePlansListSecurity
}

type CarePlansListResponse struct {
	ContentType                           string
	StatusCode                            int64
	CarePlansList200ApplicationJSONObject *CarePlansList200ApplicationJSON
}
