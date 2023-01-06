package operations

import (
	"openapi/pkg/models/shared"
)

type LabResultsCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabResultsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabResultsCreateRequest struct {
	QueryParams LabResultsCreateQueryParams
	Security    LabResultsCreateSecurity
}

type LabResultsCreateResponse struct {
	ContentType string
	LabResult   *shared.LabResult
	StatusCode  int64
}
