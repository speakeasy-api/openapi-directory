package operations

import (
	"openapi/pkg/models/shared"
)

type PatientMessagesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientMessagesUpdateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientMessagesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientMessagesUpdateRequest struct {
	PathParams  PatientMessagesUpdatePathParams
	QueryParams PatientMessagesUpdateQueryParams
	Security    PatientMessagesUpdateSecurity
}

type PatientMessagesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
