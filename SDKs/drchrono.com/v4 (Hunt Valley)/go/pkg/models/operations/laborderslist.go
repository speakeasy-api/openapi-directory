package operations

import (
	"openapi/pkg/models/shared"
)

type LabOrdersListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// LabOrdersList200ApplicationJSON
// Paginated Result
type LabOrdersList200ApplicationJSON struct {
	Data     []shared.LabOrder `json:"data,omitempty"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
}

type LabOrdersListRequest struct {
	QueryParams LabOrdersListQueryParams
	Security    LabOrdersListSecurity
}

type LabOrdersListResponse struct {
	ContentType                           string
	StatusCode                            int64
	LabOrdersList200ApplicationJSONObject *LabOrdersList200ApplicationJSON
}
