package operations

import (
	"openapi/pkg/models/shared"
)

type PatientInterventionsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientInterventionsUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientInterventionsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientInterventionsUpdateRequest struct {
	PathParams  PatientInterventionsUpdatePathParams
	QueryParams PatientInterventionsUpdateQueryParams
	Security    PatientInterventionsUpdateSecurity
}

type PatientInterventionsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
