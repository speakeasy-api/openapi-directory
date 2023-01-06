package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsSummaryDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientsSummaryDeleteQueryParams struct {
	DateOfBirth *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	FirstName   *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender      *string `queryParam:"style=form,explode=true,name=gender"`
	LastName    *string `queryParam:"style=form,explode=true,name=last_name"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsSummaryDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsSummaryDeleteRequest struct {
	PathParams  PatientsSummaryDeletePathParams
	QueryParams PatientsSummaryDeleteQueryParams
	Security    PatientsSummaryDeleteSecurity
}

type PatientsSummaryDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
