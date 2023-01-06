package operations

import (
	"openapi/pkg/models/shared"
)

type PatientCommunicationsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientCommunicationsReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientCommunicationsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientCommunicationsReadRequest struct {
	PathParams  PatientCommunicationsReadPathParams
	QueryParams PatientCommunicationsReadQueryParams
	Security    PatientCommunicationsReadSecurity
}

type PatientCommunicationsReadResponse struct {
	ContentType          string
	PatientCommunication *shared.PatientCommunication
	StatusCode           int64
}
