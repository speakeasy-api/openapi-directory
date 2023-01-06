package operations

import (
	"openapi/pkg/models/shared"
)

type ProceduresListQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	MuDate      *string `queryParam:"style=form,explode=true,name=mu_date"`
	MuDateRange *string `queryParam:"style=form,explode=true,name=mu_date_range"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
	ServiceDate *string `queryParam:"style=form,explode=true,name=service_date"`
}

type ProceduresListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ProceduresList200ApplicationJSON
// Paginated Result
type ProceduresList200ApplicationJSON struct {
	Data     []shared.BillingLineItem `json:"data,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
}

type ProceduresListRequest struct {
	QueryParams ProceduresListQueryParams
	Security    ProceduresListSecurity
}

type ProceduresListResponse struct {
	ContentType                            string
	StatusCode                             int64
	ProceduresList200ApplicationJSONObject *ProceduresList200ApplicationJSON
}
