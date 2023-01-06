package operations

import (
	"openapi/pkg/models/shared"
)

type PrescriptionMessagesListQueryParams struct {
	Cursor        *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor        *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	ParentMessage *int64  `queryParam:"style=form,explode=true,name=parent_message"`
	Patient       *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
}

type PrescriptionMessagesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PrescriptionMessagesList200ApplicationJSON
// Paginated Result
type PrescriptionMessagesList200ApplicationJSON struct {
	Data     []shared.PrescriptionMessage `json:"data,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
}

type PrescriptionMessagesListRequest struct {
	QueryParams PrescriptionMessagesListQueryParams
	Security    PrescriptionMessagesListSecurity
}

type PrescriptionMessagesListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	PrescriptionMessagesList200ApplicationJSONObject *PrescriptionMessagesList200ApplicationJSON
}
