package operations

import (
	"openapi/pkg/models/shared"
)

type MedicationsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MedicationsReadQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type MedicationsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MedicationsReadRequest struct {
	PathParams  MedicationsReadPathParams
	QueryParams MedicationsReadQueryParams
	Security    MedicationsReadSecurity
}

type MedicationsReadResponse struct {
	ContentType string
	PatientDrug *shared.PatientDrug
	StatusCode  int64
}
