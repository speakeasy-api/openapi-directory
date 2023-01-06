package operations

import (
	"openapi/pkg/models/shared"
)

type LabDocumentsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// LabDocumentsList200ApplicationJSON
// Paginated Result
type LabDocumentsList200ApplicationJSON struct {
	Data     []shared.LabOrderDocument `json:"data,omitempty"`
	Next     *string                   `json:"next,omitempty"`
	Previous *string                   `json:"previous,omitempty"`
}

type LabDocumentsListRequest struct {
	QueryParams LabDocumentsListQueryParams
	Security    LabDocumentsListSecurity
}

type LabDocumentsListResponse struct {
	ContentType                              string
	StatusCode                               int64
	LabDocumentsList200ApplicationJSONObject *LabDocumentsList200ApplicationJSON
}
