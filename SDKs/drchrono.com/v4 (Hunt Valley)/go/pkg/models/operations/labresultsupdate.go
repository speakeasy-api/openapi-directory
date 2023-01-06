package operations

import (
	"openapi/pkg/models/shared"
)

type LabResultsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabResultsUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabResultsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabResultsUpdateRequest struct {
	PathParams  LabResultsUpdatePathParams
	QueryParams LabResultsUpdateQueryParams
	Security    LabResultsUpdateSecurity
}

type LabResultsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
