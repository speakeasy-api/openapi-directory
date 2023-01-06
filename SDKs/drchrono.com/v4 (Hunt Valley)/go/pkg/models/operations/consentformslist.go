package operations

import (
	"openapi/pkg/models/shared"
)

type ConsentFormsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ConsentFormsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ConsentFormsList200ApplicationJSON
// Paginated Result
type ConsentFormsList200ApplicationJSON struct {
	Data     []shared.ConsentForm `json:"data,omitempty"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
}

type ConsentFormsListRequest struct {
	QueryParams ConsentFormsListQueryParams
	Security    ConsentFormsListSecurity
}

type ConsentFormsListResponse struct {
	ContentType                              string
	StatusCode                               int64
	ConsentFormsList200ApplicationJSONObject *ConsentFormsList200ApplicationJSON
}
