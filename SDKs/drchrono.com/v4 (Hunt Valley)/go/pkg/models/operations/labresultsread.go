package operations

import (
	"openapi/pkg/models/shared"
)

type LabResultsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabResultsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabResultsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabResultsReadRequest struct {
	PathParams  LabResultsReadPathParams
	QueryParams LabResultsReadQueryParams
	Security    LabResultsReadSecurity
}

type LabResultsReadResponse struct {
	ContentType string
	LabResult   *shared.LabResult
	StatusCode  int64
}
