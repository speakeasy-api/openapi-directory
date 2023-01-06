package operations

import (
	"openapi/pkg/models/shared"
)

type EobsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type EobsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// EobsList200ApplicationJSON
// Paginated Result
type EobsList200ApplicationJSON struct {
	Data     []shared.EobObject `json:"data,omitempty"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
}

type EobsListRequest struct {
	QueryParams EobsListQueryParams
	Security    EobsListSecurity
}

type EobsListResponse struct {
	ContentType                      string
	StatusCode                       int64
	EobsList200ApplicationJSONObject *EobsList200ApplicationJSON
}
