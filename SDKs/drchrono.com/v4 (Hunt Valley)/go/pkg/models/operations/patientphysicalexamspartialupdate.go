package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPhysicalExamsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientPhysicalExamsPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type PatientPhysicalExamsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPhysicalExamsPartialUpdateRequest struct {
	PathParams  PatientPhysicalExamsPartialUpdatePathParams
	QueryParams PatientPhysicalExamsPartialUpdateQueryParams
	Security    PatientPhysicalExamsPartialUpdateSecurity
}

type PatientPhysicalExamsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
