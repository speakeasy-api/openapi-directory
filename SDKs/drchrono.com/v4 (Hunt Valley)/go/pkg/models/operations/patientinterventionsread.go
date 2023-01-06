package operations

import (
	"openapi/pkg/models/shared"
)

type PatientInterventionsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientInterventionsReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientInterventionsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientInterventionsReadRequest struct {
	PathParams  PatientInterventionsReadPathParams
	QueryParams PatientInterventionsReadQueryParams
	Security    PatientInterventionsReadSecurity
}

type PatientInterventionsReadResponse struct {
	ContentType         string
	PatientIntervention *shared.PatientIntervention
	StatusCode          int64
}
