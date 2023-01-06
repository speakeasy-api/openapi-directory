package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientsPartialUpdateQueryParams struct {
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

type PatientsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsPartialUpdateRequest struct {
	PathParams  PatientsPartialUpdatePathParams
	QueryParams PatientsPartialUpdateQueryParams
	Security    PatientsPartialUpdateSecurity
}

type PatientsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
