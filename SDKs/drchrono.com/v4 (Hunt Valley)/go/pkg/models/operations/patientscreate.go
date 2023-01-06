package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsCreateQueryParams struct {
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

type PatientsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsCreateRequest struct {
	QueryParams PatientsCreateQueryParams
	Security    PatientsCreateSecurity
}

type PatientsCreateResponse struct {
	ContentType string
	Patient     *shared.Patient
	StatusCode  int64
}
