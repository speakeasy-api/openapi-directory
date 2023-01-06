package operations

import (
	"openapi/pkg/models/shared"
)

type PatientFlagTypesCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type PatientFlagTypesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientFlagTypesCreateRequest struct {
	QueryParams PatientFlagTypesCreateQueryParams
	Security    PatientFlagTypesCreateSecurity
}

type PatientFlagTypesCreateResponse struct {
	ContentType     string
	PatientFlagType *shared.PatientFlagType
	StatusCode      int64
}
