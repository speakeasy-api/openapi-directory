package operations

import (
	"openapi/pkg/models/shared"
)

type PatientLabResultsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientLabResultsPartialUpdateQueryParams struct {
	Doctor         *int64  `queryParam:"style=form,explode=true,name=doctor"`
	OrderingDoctor *int64  `queryParam:"style=form,explode=true,name=ordering_doctor"`
	Patient        *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since          *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientLabResultsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientLabResultsPartialUpdateRequest struct {
	PathParams  PatientLabResultsPartialUpdatePathParams
	QueryParams PatientLabResultsPartialUpdateQueryParams
	Security    PatientLabResultsPartialUpdateSecurity
}

type PatientLabResultsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
