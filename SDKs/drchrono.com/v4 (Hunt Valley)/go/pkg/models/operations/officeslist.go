package operations

import (
	"openapi/pkg/models/shared"
)

type OfficesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type OfficesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// OfficesList200ApplicationJSON
// Paginated Result
type OfficesList200ApplicationJSON struct {
	Data     []shared.Office `json:"data,omitempty"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
}

type OfficesListRequest struct {
	QueryParams OfficesListQueryParams
	Security    OfficesListSecurity
}

type OfficesListResponse struct {
	ContentType                         string
	StatusCode                          int64
	OfficesList200ApplicationJSONObject *OfficesList200ApplicationJSON
}
