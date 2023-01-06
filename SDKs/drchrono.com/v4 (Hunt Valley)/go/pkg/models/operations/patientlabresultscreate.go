package operations

import (
	"openapi/pkg/models/shared"
)

type PatientLabResultsCreateQueryParams struct {
	Doctor         *int64  `queryParam:"style=form,explode=true,name=doctor"`
	OrderingDoctor *int64  `queryParam:"style=form,explode=true,name=ordering_doctor"`
	Patient        *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since          *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientLabResultsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientLabResultsCreateRequest struct {
	QueryParams PatientLabResultsCreateQueryParams
	Security    PatientLabResultsCreateSecurity
}

type PatientLabResultsCreateResponse struct {
	ContentType         string
	PatientLabResultSet *shared.PatientLabResultSet
	StatusCode          int64
}
