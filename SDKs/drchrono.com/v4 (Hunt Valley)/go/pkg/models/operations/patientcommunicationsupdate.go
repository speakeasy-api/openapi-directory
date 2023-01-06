package operations

import (
	"openapi/pkg/models/shared"
)

type PatientCommunicationsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientCommunicationsUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientCommunicationsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientCommunicationsUpdateRequest struct {
	PathParams  PatientCommunicationsUpdatePathParams
	QueryParams PatientCommunicationsUpdateQueryParams
	Security    PatientCommunicationsUpdateSecurity
}

type PatientCommunicationsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
