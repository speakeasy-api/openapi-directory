package operations

import (
	"openapi/pkg/models/shared"
)

type LabTestsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabTestsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabTestsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabTestsReadRequest struct {
	PathParams  LabTestsReadPathParams
	QueryParams LabTestsReadQueryParams
	Security    LabTestsReadSecurity
}

type LabTestsReadResponse struct {
	ContentType string
	LabTest     *shared.LabTest
	StatusCode  int64
}
