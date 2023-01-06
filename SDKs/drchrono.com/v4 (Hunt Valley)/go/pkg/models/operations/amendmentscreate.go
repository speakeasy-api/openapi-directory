package operations

import (
	"openapi/pkg/models/shared"
)

type AmendmentsCreateQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient     *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AmendmentsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AmendmentsCreateRequest struct {
	QueryParams AmendmentsCreateQueryParams
	Security    AmendmentsCreateSecurity
}

type AmendmentsCreateResponse struct {
	ContentType      string
	PatientAmendment *shared.PatientAmendment
	StatusCode       int64
}
