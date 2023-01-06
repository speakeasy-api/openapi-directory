package operations

import (
	"openapi/pkg/models/shared"
)

type LabResultsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabResultsDeleteQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabResultsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabResultsDeleteRequest struct {
	PathParams  LabResultsDeletePathParams
	QueryParams LabResultsDeleteQueryParams
	Security    LabResultsDeleteSecurity
}

type LabResultsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
