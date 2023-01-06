package operations

import (
	"openapi/pkg/models/shared"
)

type PatientFlagTypesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientFlagTypesReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type PatientFlagTypesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientFlagTypesReadRequest struct {
	PathParams  PatientFlagTypesReadPathParams
	QueryParams PatientFlagTypesReadQueryParams
	Security    PatientFlagTypesReadSecurity
}

type PatientFlagTypesReadResponse struct {
	ContentType     string
	PatientFlagType *shared.PatientFlagType
	StatusCode      int64
}
