package operations

import (
	"openapi/pkg/models/shared"
)

type LineItemsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LineItemsDeleteQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office      *int64  `queryParam:"style=form,explode=true,name=office"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
	PostedDate  *string `queryParam:"style=form,explode=true,name=posted_date"`
	ServiceDate *string `queryParam:"style=form,explode=true,name=service_date"`
	Since       *string `queryParam:"style=form,explode=true,name=since"`
}

type LineItemsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type LineItemsDeleteRequest struct {
	PathParams  LineItemsDeletePathParams
	QueryParams LineItemsDeleteQueryParams
	Security    LineItemsDeleteSecurity
}

type LineItemsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
