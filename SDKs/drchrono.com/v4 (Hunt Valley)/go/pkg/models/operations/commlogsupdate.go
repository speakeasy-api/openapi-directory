package operations

import (
	"openapi/pkg/models/shared"
)

type CommLogsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CommLogsUpdateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type CommLogsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CommLogsUpdateRequest struct {
	PathParams  CommLogsUpdatePathParams
	QueryParams CommLogsUpdateQueryParams
	Security    CommLogsUpdateSecurity
}

type CommLogsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
