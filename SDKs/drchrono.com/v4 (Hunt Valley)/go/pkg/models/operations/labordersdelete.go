package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabOrdersDeleteQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabOrdersDeleteRequest struct {
	PathParams  LabOrdersDeletePathParams
	QueryParams LabOrdersDeleteQueryParams
	Security    LabOrdersDeleteSecurity
}

type LabOrdersDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
