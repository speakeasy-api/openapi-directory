package operations

import (
	"openapi/pkg/models/shared"
)

type PatientCommunicationsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientCommunicationsPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientCommunicationsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientCommunicationsPartialUpdateRequest struct {
	PathParams  PatientCommunicationsPartialUpdatePathParams
	QueryParams PatientCommunicationsPartialUpdateQueryParams
	Security    PatientCommunicationsPartialUpdateSecurity
}

type PatientCommunicationsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
