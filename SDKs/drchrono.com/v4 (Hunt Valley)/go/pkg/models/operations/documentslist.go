package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type DocumentsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// DocumentsList200ApplicationJSON
// Paginated Result
type DocumentsList200ApplicationJSON struct {
	Data     []shared.ScannedClinicalDocument `json:"data,omitempty"`
	Next     *string                          `json:"next,omitempty"`
	Previous *string                          `json:"previous,omitempty"`
}

type DocumentsListRequest struct {
	QueryParams DocumentsListQueryParams
	Security    DocumentsListSecurity
}

type DocumentsListResponse struct {
	ContentType                           string
	StatusCode                            int64
	DocumentsList200ApplicationJSONObject *DocumentsList200ApplicationJSON
}
