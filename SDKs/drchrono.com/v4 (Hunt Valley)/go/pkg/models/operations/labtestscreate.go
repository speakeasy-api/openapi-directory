package operations

import (
	"openapi/pkg/models/shared"
)

type LabTestsCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Order  *int64 `queryParam:"style=form,explode=true,name=order"`
}

type LabTestsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabTestsCreateRequest struct {
	QueryParams LabTestsCreateQueryParams
	Security    LabTestsCreateSecurity
}

type LabTestsCreateResponse struct {
	ContentType string
	LabTest     *shared.LabTest
	StatusCode  int64
}
