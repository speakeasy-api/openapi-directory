package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPhysicalExamsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientPhysicalExamsUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientPhysicalExamsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPhysicalExamsUpdateRequest struct {
	PathParams  PatientPhysicalExamsUpdatePathParams
	QueryParams PatientPhysicalExamsUpdateQueryParams
	Security    PatientPhysicalExamsUpdateSecurity
}

type PatientPhysicalExamsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
