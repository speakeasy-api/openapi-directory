package operations

import (
	"openapi/pkg/models/shared"
)

type PatientFlagTypesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientFlagTypesUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type PatientFlagTypesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientFlagTypesUpdateRequest struct {
	PathParams  PatientFlagTypesUpdatePathParams
	QueryParams PatientFlagTypesUpdateQueryParams
	Security    PatientFlagTypesUpdateSecurity
}

type PatientFlagTypesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
