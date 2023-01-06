package operations

import (
	"openapi/pkg/models/shared"
)

type CommLogsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CommLogsReadQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type CommLogsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CommLogsReadRequest struct {
	PathParams  CommLogsReadPathParams
	QueryParams CommLogsReadQueryParams
	Security    CommLogsReadSecurity
}

type CommLogsReadResponse struct {
	ContentType  string
	PhoneCallLog *shared.PhoneCallLog
	StatusCode   int64
}
