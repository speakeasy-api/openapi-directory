package operations

import (
	"openapi/pkg/models/shared"
)

type PatientMessagesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientMessagesReadQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientMessagesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientMessagesReadRequest struct {
	PathParams  PatientMessagesReadPathParams
	QueryParams PatientMessagesReadQueryParams
	Security    PatientMessagesReadSecurity
}

type PatientMessagesReadResponse struct {
	ContentType    string
	PatientMessage *shared.PatientMessage
	StatusCode     int64
}
