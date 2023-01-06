package operations

import (
	"openapi/pkg/models/shared"
)

type LabResultsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Order    *int64  `queryParam:"style=form,explode=true,name=order"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type LabResultsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// LabResultsList200ApplicationJSON
// Paginated Result
type LabResultsList200ApplicationJSON struct {
	Data     []shared.LabResult `json:"data,omitempty"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
}

type LabResultsListRequest struct {
	QueryParams LabResultsListQueryParams
	Security    LabResultsListSecurity
}

type LabResultsListResponse struct {
	ContentType                            string
	StatusCode                             int64
	LabResultsList200ApplicationJSONObject *LabResultsList200ApplicationJSON
}
