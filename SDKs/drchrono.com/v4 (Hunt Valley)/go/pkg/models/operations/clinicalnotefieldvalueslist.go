package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldValuesListQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	ClinicalNoteField    *int64  `queryParam:"style=form,explode=true,name=clinical_note_field"`
	ClinicalNoteTemplate *int64  `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Cursor               *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize             *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since                *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNoteFieldValuesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ClinicalNoteFieldValuesList200ApplicationJSON
// Paginated Result
type ClinicalNoteFieldValuesList200ApplicationJSON struct {
	Data     []shared.SoapNoteLineItemFieldValue `json:"data,omitempty"`
	Next     *string                             `json:"next,omitempty"`
	Previous *string                             `json:"previous,omitempty"`
}

type ClinicalNoteFieldValuesListRequest struct {
	QueryParams ClinicalNoteFieldValuesListQueryParams
	Security    ClinicalNoteFieldValuesListSecurity
}

type ClinicalNoteFieldValuesListResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ClinicalNoteFieldValuesList200ApplicationJSONObject *ClinicalNoteFieldValuesList200ApplicationJSON
}
