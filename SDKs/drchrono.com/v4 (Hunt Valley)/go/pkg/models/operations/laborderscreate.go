package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersCreateQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabOrdersCreateRequest struct {
	QueryParams LabOrdersCreateQueryParams
	Security    LabOrdersCreateSecurity
}

type LabOrdersCreateResponse struct {
	ContentType string
	LabOrder    *shared.LabOrder
	StatusCode  int64
}
