package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientsDeleteQueryParams struct {
	ChartID           *string `queryParam:"style=form,explode=true,name=chart_id"`
	DateOfBirth       *string `queryParam:"style=form,explode=true,name=date_of_birth"`
	Doctor            *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Email             *string `queryParam:"style=form,explode=true,name=email"`
	Ethnicity         *string `queryParam:"style=form,explode=true,name=ethnicity"`
	FirstName         *string `queryParam:"style=form,explode=true,name=first_name"`
	Gender            *string `queryParam:"style=form,explode=true,name=gender"`
	LastName          *string `queryParam:"style=form,explode=true,name=last_name"`
	PreferredLanguage *string `queryParam:"style=form,explode=true,name=preferred_language"`
	Race              *string `queryParam:"style=form,explode=true,name=race"`
	Since             *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsDeleteRequest struct {
	PathParams  PatientsDeletePathParams
	QueryParams PatientsDeleteQueryParams
	Security    PatientsDeleteSecurity
}

type PatientsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
