package operations

import (
	"openapi/pkg/models/shared"
)

type PatientLabResultsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientLabResultsReadQueryParams struct {
	Doctor         *int64  `queryParam:"style=form,explode=true,name=doctor"`
	OrderingDoctor *int64  `queryParam:"style=form,explode=true,name=ordering_doctor"`
	Patient        *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since          *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientLabResultsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientLabResultsReadRequest struct {
	PathParams  PatientLabResultsReadPathParams
	QueryParams PatientLabResultsReadQueryParams
	Security    PatientLabResultsReadSecurity
}

type PatientLabResultsReadResponse struct {
	ContentType         string
	PatientLabResultSet *shared.PatientLabResultSet
	StatusCode          int64
}
