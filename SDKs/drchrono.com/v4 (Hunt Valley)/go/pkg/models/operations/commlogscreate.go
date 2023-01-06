package operations

import (
	"openapi/pkg/models/shared"
)

type CommLogsCreateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type CommLogsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CommLogsCreateRequest struct {
	QueryParams CommLogsCreateQueryParams
	Security    CommLogsCreateSecurity
}

type CommLogsCreateResponse struct {
	ContentType  string
	PhoneCallLog *shared.PhoneCallLog
	StatusCode   int64
}
