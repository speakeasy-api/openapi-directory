package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldTypesListQueryParams struct {
	ClinicalNoteTemplate *int64  `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Cursor               *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize             *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ClinicalNoteFieldTypesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ClinicalNoteFieldTypesList200ApplicationJSON
// Paginated Result
type ClinicalNoteFieldTypesList200ApplicationJSON struct {
	Data     []shared.SoapNoteLineItemFieldType `json:"data,omitempty"`
	Next     *string                            `json:"next,omitempty"`
	Previous *string                            `json:"previous,omitempty"`
}

type ClinicalNoteFieldTypesListRequest struct {
	QueryParams ClinicalNoteFieldTypesListQueryParams
	Security    ClinicalNoteFieldTypesListSecurity
}

type ClinicalNoteFieldTypesListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ClinicalNoteFieldTypesList200ApplicationJSONObject *ClinicalNoteFieldTypesList200ApplicationJSON
}
