package operations

import (
	"openapi/pkg/models/shared"
)

type PatientMessagesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientMessagesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientMessagesList200ApplicationJSON
// Paginated Result
type PatientMessagesList200ApplicationJSON struct {
	Data     []shared.PatientMessage `json:"data,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
}

type PatientMessagesListRequest struct {
	QueryParams PatientMessagesListQueryParams
	Security    PatientMessagesListSecurity
}

type PatientMessagesListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	PatientMessagesList200ApplicationJSONObject *PatientMessagesList200ApplicationJSON
}
