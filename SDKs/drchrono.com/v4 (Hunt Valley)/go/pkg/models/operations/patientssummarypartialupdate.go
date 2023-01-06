package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsSummaryPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientsSummaryPartialUpdateQueryParams struct {
	DateOfBirth *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	FirstName   *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender      *string `queryParam:"style=form,explode=true,name=gender"`
	LastName    *string `queryParam:"style=form,explode=true,name=last_name"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsSummaryPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsSummaryPartialUpdateRequest struct {
	PathParams  PatientsSummaryPartialUpdatePathParams
	QueryParams PatientsSummaryPartialUpdateQueryParams
	Security    PatientsSummaryPartialUpdateSecurity
}

type PatientsSummaryPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
