package operations

import (
	"openapi/pkg/models/shared"
)

type PatientFlagTypesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientFlagTypesPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type PatientFlagTypesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientFlagTypesPartialUpdateRequest struct {
	PathParams  PatientFlagTypesPartialUpdatePathParams
	QueryParams PatientFlagTypesPartialUpdateQueryParams
	Security    PatientFlagTypesPartialUpdateSecurity
}

type PatientFlagTypesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
