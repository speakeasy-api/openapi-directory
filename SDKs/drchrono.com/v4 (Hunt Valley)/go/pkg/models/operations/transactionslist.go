package operations

import (
	"openapi/pkg/models/shared"
)

type TransactionsListQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	LineItem    *int64  `queryParam:"style=form,explode=true,name=line_item"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	PostedDate  *string `queryParam:"style=form,explode=true,name=posted_date"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type TransactionsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// TransactionsList200ApplicationJSON
// Paginated Result
type TransactionsList200ApplicationJSON struct {
	Data     []shared.LineItemTransaction `json:"data,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
}

type TransactionsListRequest struct {
	QueryParams TransactionsListQueryParams
	Security    TransactionsListSecurity
}

type TransactionsListResponse struct {
	ContentType                              string
	StatusCode                               int64
	TransactionsList200ApplicationJSONObject *TransactionsList200ApplicationJSON
}
