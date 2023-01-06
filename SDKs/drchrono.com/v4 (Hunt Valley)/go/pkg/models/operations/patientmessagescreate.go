package operations

import (
	"openapi/pkg/models/shared"
)

type PatientMessagesCreateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientMessagesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientMessagesCreateRequest struct {
	QueryParams PatientMessagesCreateQueryParams
	Security    PatientMessagesCreateSecurity
}

type PatientMessagesCreateResponse struct {
	ContentType    string
	PatientMessage *shared.PatientMessage
	StatusCode     int64
}
