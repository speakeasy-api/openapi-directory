package operations

import (
	"openapi/pkg/models/shared"
)

type LabResultsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabResultsPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabResultsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabResultsPartialUpdateRequest struct {
	PathParams  LabResultsPartialUpdatePathParams
	QueryParams LabResultsPartialUpdateQueryParams
	Security    LabResultsPartialUpdateSecurity
}

type LabResultsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
