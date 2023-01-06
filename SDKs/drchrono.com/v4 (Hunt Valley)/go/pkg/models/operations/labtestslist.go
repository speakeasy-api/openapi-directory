package operations

import (
	"openapi/pkg/models/shared"
)

type LabTestsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Order    *int64  `queryParam:"style=form,explode=true,name=order"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type LabTestsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// LabTestsList200ApplicationJSON
// Paginated Result
type LabTestsList200ApplicationJSON struct {
	Data     []shared.LabTest `json:"data,omitempty"`
	Next     *string          `json:"next,omitempty"`
	Previous *string          `json:"previous,omitempty"`
}

type LabTestsListRequest struct {
	QueryParams LabTestsListQueryParams
	Security    LabTestsListSecurity
}

type LabTestsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	LabTestsList200ApplicationJSONObject *LabTestsList200ApplicationJSON
}
