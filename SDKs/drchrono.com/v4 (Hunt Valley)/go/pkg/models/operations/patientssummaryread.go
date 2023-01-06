package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsSummaryReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientsSummaryReadQueryParams struct {
	DateOfBirth *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	FirstName   *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender      *string `queryParam:"style=form,explode=true,name=gender"`
	LastName    *string `queryParam:"style=form,explode=true,name=last_name"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsSummaryReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsSummaryReadRequest struct {
	PathParams  PatientsSummaryReadPathParams
	QueryParams PatientsSummaryReadQueryParams
	Security    PatientsSummaryReadSecurity
}

type PatientsSummaryReadResponse struct {
	ContentType string
	Patient     *shared.Patient
	StatusCode  int64
}
