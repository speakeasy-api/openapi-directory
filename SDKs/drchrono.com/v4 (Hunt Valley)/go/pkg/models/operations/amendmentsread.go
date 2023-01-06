package operations

import (
	"openapi/pkg/models/shared"
)

type AmendmentsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AmendmentsReadQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient     *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AmendmentsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AmendmentsReadRequest struct {
	PathParams  AmendmentsReadPathParams
	QueryParams AmendmentsReadQueryParams
	Security    AmendmentsReadSecurity
}

type AmendmentsReadResponse struct {
	ContentType      string
	PatientAmendment *shared.PatientAmendment
	StatusCode       int64
}
