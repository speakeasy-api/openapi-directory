package operations

import (
	"openapi/pkg/models/shared"
)

type AmendmentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AmendmentsUpdateQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient     *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AmendmentsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AmendmentsUpdateRequest struct {
	PathParams  AmendmentsUpdatePathParams
	QueryParams AmendmentsUpdateQueryParams
	Security    AmendmentsUpdateSecurity
}

type AmendmentsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
