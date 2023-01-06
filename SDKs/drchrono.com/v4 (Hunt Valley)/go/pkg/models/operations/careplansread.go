package operations

import (
	"openapi/pkg/models/shared"
)

type CarePlansReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CarePlansReadQueryParams struct {
	Doctor   *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient  *int64 `queryParam:"style=form,explode=true,name=patient"`
	PlanType *int64 `queryParam:"style=form,explode=true,name=plan_type"`
}

type CarePlansReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CarePlansReadRequest struct {
	PathParams  CarePlansReadPathParams
	QueryParams CarePlansReadQueryParams
	Security    CarePlansReadSecurity
}

type CarePlansReadResponse struct {
	CarePlan    *shared.CarePlan
	ContentType string
	StatusCode  int64
}
