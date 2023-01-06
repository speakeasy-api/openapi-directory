package operations

import (
	"openapi/pkg/models/shared"
)

type PatientLabResultsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientLabResultsUpdateQueryParams struct {
	Doctor         *int64  `queryParam:"style=form,explode=true,name=doctor"`
	OrderingDoctor *int64  `queryParam:"style=form,explode=true,name=ordering_doctor"`
	Patient        *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since          *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientLabResultsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientLabResultsUpdateRequest struct {
	PathParams  PatientLabResultsUpdatePathParams
	QueryParams PatientLabResultsUpdateQueryParams
	Security    PatientLabResultsUpdateSecurity
}

type PatientLabResultsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
