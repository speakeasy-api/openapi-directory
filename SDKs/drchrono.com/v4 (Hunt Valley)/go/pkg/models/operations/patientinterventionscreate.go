package operations

import (
	"openapi/pkg/models/shared"
)

type PatientInterventionsCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientInterventionsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientInterventionsCreateRequest struct {
	QueryParams PatientInterventionsCreateQueryParams
	Security    PatientInterventionsCreateSecurity
}

type PatientInterventionsCreateResponse struct {
	ContentType         string
	PatientIntervention *shared.PatientIntervention
	StatusCode          int64
}
