package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNotesListQueryParams struct {
	Cursor    *string `queryParam:"style=form,explode=true,name=cursor"`
	Date      *string `queryParam:"style=form,explode=true,name=date"`
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Doctor    *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office    *int64  `queryParam:"style=form,explode=true,name=office"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient   *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since     *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNotesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ClinicalNotesList200ApplicationJSON
// Paginated Result
type ClinicalNotesList200ApplicationJSON struct {
	Data     []shared.ClinicalNote `json:"data,omitempty"`
	Next     *string               `json:"next,omitempty"`
	Previous *string               `json:"previous,omitempty"`
}

type ClinicalNotesListRequest struct {
	QueryParams ClinicalNotesListQueryParams
	Security    ClinicalNotesListSecurity
}

type ClinicalNotesListResponse struct {
	ContentType                               string
	StatusCode                                int64
	ClinicalNotesList200ApplicationJSONObject *ClinicalNotesList200ApplicationJSON
}
