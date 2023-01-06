package operations

import (
	"openapi/pkg/models/shared"
)

type TransactionsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TransactionsReadQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	LineItem    *int64  `queryParam:"style=form,explode=true,name=line_item"`
	PostedDate  *string `queryParam:"style=form,explode=true,name=posted_date"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type TransactionsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type TransactionsReadRequest struct {
	PathParams  TransactionsReadPathParams
	QueryParams TransactionsReadQueryParams
	Security    TransactionsReadSecurity
}

type TransactionsReadResponse struct {
	ContentType         string
	LineItemTransaction *shared.LineItemTransaction
	StatusCode          int64
}
