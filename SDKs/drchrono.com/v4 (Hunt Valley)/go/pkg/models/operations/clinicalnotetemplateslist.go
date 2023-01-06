package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteTemplatesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ClinicalNoteTemplatesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ClinicalNoteTemplatesList200ApplicationJSON
// Paginated Result
type ClinicalNoteTemplatesList200ApplicationJSON struct {
	Data     []shared.SoapNoteCustomReport `json:"data,omitempty"`
	Next     *string                       `json:"next,omitempty"`
	Previous *string                       `json:"previous,omitempty"`
}

type ClinicalNoteTemplatesListRequest struct {
	QueryParams ClinicalNoteTemplatesListQueryParams
	Security    ClinicalNoteTemplatesListSecurity
}

type ClinicalNoteTemplatesListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ClinicalNoteTemplatesList200ApplicationJSONObject *ClinicalNoteTemplatesList200ApplicationJSON
}
