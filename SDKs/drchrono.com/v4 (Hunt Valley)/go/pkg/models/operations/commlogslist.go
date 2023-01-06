package operations

import (
	"openapi/pkg/models/shared"
)

type CommLogsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type CommLogsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CommLogsList200ApplicationJSON
// Paginated Result
type CommLogsList200ApplicationJSON struct {
	Data     []shared.PhoneCallLog `json:"data,omitempty"`
	Next     *string               `json:"next,omitempty"`
	Previous *string               `json:"previous,omitempty"`
}

type CommLogsListRequest struct {
	QueryParams CommLogsListQueryParams
	Security    CommLogsListSecurity
}

type CommLogsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	CommLogsList200ApplicationJSONObject *CommLogsList200ApplicationJSON
}
