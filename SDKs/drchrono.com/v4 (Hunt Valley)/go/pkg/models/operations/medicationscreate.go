package operations

import (
	"openapi/pkg/models/shared"
)

type MedicationsCreateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type MedicationsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MedicationsCreateRequest struct {
	QueryParams MedicationsCreateQueryParams
	Security    MedicationsCreateSecurity
}

type MedicationsCreateResponse struct {
	ContentType string
	PatientDrug *shared.PatientDrug
	StatusCode  int64
}
