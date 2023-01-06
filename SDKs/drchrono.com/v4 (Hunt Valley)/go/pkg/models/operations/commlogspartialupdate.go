package operations

import (
	"openapi/pkg/models/shared"
)

type CommLogsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CommLogsPartialUpdateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type CommLogsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CommLogsPartialUpdateRequest struct {
	PathParams  CommLogsPartialUpdatePathParams
	QueryParams CommLogsPartialUpdateQueryParams
	Security    CommLogsPartialUpdateSecurity
}

type CommLogsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
