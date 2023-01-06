package operations

import (
	"openapi/pkg/models/shared"
)

type LabTestsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabTestsPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabTestsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabTestsPartialUpdateRequest struct {
	PathParams  LabTestsPartialUpdatePathParams
	QueryParams LabTestsPartialUpdateQueryParams
	Security    LabTestsPartialUpdateSecurity
}

type LabTestsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
