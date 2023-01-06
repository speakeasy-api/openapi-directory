package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsSummaryCreateQueryParams struct {
	DateOfBirth *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	FirstName   *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender      *string `queryParam:"style=form,explode=true,name=gender"`
	LastName    *string `queryParam:"style=form,explode=true,name=last_name"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsSummaryCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsSummaryCreateRequest struct {
	QueryParams PatientsSummaryCreateQueryParams
	Security    PatientsSummaryCreateSecurity
}

type PatientsSummaryCreateResponse struct {
	ContentType string
	Patient     *shared.Patient
	StatusCode  int64
}
