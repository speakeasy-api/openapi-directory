package operations

import (
	"openapi/pkg/models/shared"
)

type LabTestsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabTestsDeleteQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabTestsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabTestsDeleteRequest struct {
	PathParams  LabTestsDeletePathParams
	QueryParams LabTestsDeleteQueryParams
	Security    LabTestsDeleteSecurity
}

type LabTestsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
