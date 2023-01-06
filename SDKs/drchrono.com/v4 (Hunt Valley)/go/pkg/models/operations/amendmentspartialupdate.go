package operations

import (
	"openapi/pkg/models/shared"
)

type AmendmentsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AmendmentsPartialUpdateQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient     *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AmendmentsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type AmendmentsPartialUpdateRequest struct {
	PathParams  AmendmentsPartialUpdatePathParams
	QueryParams AmendmentsPartialUpdateQueryParams
	Security    AmendmentsPartialUpdateSecurity
}

type AmendmentsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
