package operations

import (
	"openapi/pkg/models/shared"
)

type PatientsQrda1PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientsQrda1QueryParams struct {
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

type PatientsQrda1Security struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientsQrda1Request struct {
	PathParams  PatientsQrda1PathParams
	QueryParams PatientsQrda1QueryParams
	Security    PatientsQrda1Security
}

type PatientsQrda1Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
