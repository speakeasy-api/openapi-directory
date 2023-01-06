package operations

import (
	"openapi/pkg/models/shared"
)

type SublabsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type SublabsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// SublabsList200ApplicationJSON
// Paginated Result
type SublabsList200ApplicationJSON struct {
	Data     []shared.LabVendorLocation `json:"data,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
}

type SublabsListRequest struct {
	QueryParams SublabsListQueryParams
	Security    SublabsListSecurity
}

type SublabsListResponse struct {
	ContentType                         string
	StatusCode                          int64
	SublabsList200ApplicationJSONObject *SublabsList200ApplicationJSON
}
