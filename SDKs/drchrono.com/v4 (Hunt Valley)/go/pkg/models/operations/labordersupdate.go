package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LabOrdersUpdateQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LabOrdersUpdateRequest struct {
	PathParams  LabOrdersUpdatePathParams
	QueryParams LabOrdersUpdateQueryParams
	Security    LabOrdersUpdateSecurity
}

type LabOrdersUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
