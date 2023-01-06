package operations

import (
	"openapi/pkg/models/shared"
)

type ClaimBillingNotesListQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ClaimBillingNotesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ClaimBillingNotesList200ApplicationJSON
// Paginated Result
type ClaimBillingNotesList200ApplicationJSON struct {
	Data     []shared.ClaimBillingNotes `json:"data,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
}

type ClaimBillingNotesListRequest struct {
	QueryParams ClaimBillingNotesListQueryParams
	Security    ClaimBillingNotesListSecurity
}

type ClaimBillingNotesListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ClaimBillingNotesList200ApplicationJSONObject *ClaimBillingNotesList200ApplicationJSON
}
