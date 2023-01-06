package operations

import (
	"openapi/pkg/models/shared"
)

type PatientLabResultsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientLabResultsDeleteQueryParams struct {
	Doctor         *int64  `queryParam:"style=form,explode=true,name=doctor"`
	OrderingDoctor *int64  `queryParam:"style=form,explode=true,name=ordering_doctor"`
	Patient        *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since          *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientLabResultsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientLabResultsDeleteRequest struct {
	PathParams  PatientLabResultsDeletePathParams
	QueryParams PatientLabResultsDeleteQueryParams
	Security    PatientLabResultsDeleteSecurity
}

type PatientLabResultsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
