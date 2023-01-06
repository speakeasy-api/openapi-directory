package operations

import (
	"openapi/pkg/models/shared"
)

type LabTestsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabTestsUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabTestsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabTestsUpdateRequest struct {
	PathParams  LabTestsUpdatePathParams
	QueryParams LabTestsUpdateQueryParams
	Security    LabTestsUpdateSecurity
}

type LabTestsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
