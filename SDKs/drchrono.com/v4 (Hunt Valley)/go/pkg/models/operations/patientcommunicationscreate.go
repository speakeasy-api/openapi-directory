package operations

import (
	"openapi/pkg/models/shared"
)

type PatientCommunicationsCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientCommunicationsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientCommunicationsCreateRequest struct {
	QueryParams PatientCommunicationsCreateQueryParams
	Security    PatientCommunicationsCreateSecurity
}

type PatientCommunicationsCreateResponse struct {
	ContentType          string
	PatientCommunication *shared.PatientCommunication
	StatusCode           int64
}
