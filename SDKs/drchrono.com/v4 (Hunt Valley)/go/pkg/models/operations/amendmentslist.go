package operations

import (
	"openapi/pkg/models/shared"
)

type AmendmentsListQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type AmendmentsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// AmendmentsList200ApplicationJSON
// Paginated Result
type AmendmentsList200ApplicationJSON struct {
	Data     []shared.PatientAmendment `json:"data,omitempty"`
	Next     *string                   `json:"next,omitempty"`
	Previous *string                   `json:"previous,omitempty"`
}

type AmendmentsListRequest struct {
	QueryParams AmendmentsListQueryParams
	Security    AmendmentsListSecurity
}

type AmendmentsListResponse struct {
	ContentType                            string
	StatusCode                             int64
	AmendmentsList200ApplicationJSONObject *AmendmentsList200ApplicationJSON
}
