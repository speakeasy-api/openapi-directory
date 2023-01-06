package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersSummaryListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersSummaryListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// LabOrdersSummaryList200ApplicationJSON
// Paginated Result
type LabOrdersSummaryList200ApplicationJSON struct {
	Data     []shared.LabOrder `json:"data,omitempty"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
}

type LabOrdersSummaryListRequest struct {
	QueryParams LabOrdersSummaryListQueryParams
	Security    LabOrdersSummaryListSecurity
}

type LabOrdersSummaryListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	LabOrdersSummaryList200ApplicationJSONObject *LabOrdersSummaryList200ApplicationJSON
}
