package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabOrdersReadQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabOrdersReadRequest struct {
	PathParams  LabOrdersReadPathParams
	QueryParams LabOrdersReadQueryParams
	Security    LabOrdersReadSecurity
}

type LabOrdersReadResponse struct {
	ContentType string
	LabOrder    *shared.LabOrder
	StatusCode  int64
}
