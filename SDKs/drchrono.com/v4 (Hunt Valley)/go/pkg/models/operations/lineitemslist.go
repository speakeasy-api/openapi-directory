package operations

import (
	"openapi/pkg/models/shared"
)

type LineItemsListQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office      *int64  `queryParam:"style=form,explode=true,name=office"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
	PostedDate  *string `queryParam:"style=form,explode=true,name=posted_date"`
	ServiceDate *string `queryParam:"style=form,explode=true,name=service_date"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type LineItemsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// LineItemsList200ApplicationJSON
// Paginated Result
type LineItemsList200ApplicationJSON struct {
	Data     []shared.BillingLineItem `json:"data,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
}

type LineItemsListRequest struct {
	QueryParams LineItemsListQueryParams
	Security    LineItemsListSecurity
}

type LineItemsListResponse struct {
	ContentType                           string
	StatusCode                            int64
	LineItemsList200ApplicationJSONObject *LineItemsList200ApplicationJSON
}
