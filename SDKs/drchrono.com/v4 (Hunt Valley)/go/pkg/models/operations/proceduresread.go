package operations

import (
	"openapi/pkg/models/shared"
)

type ProceduresReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ProceduresReadQueryParams struct {
	Appointment *int64  `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	MuDate      *string `queryParam:"style=form,explode=true,name=mu_date"`
	MuDateRange *string `queryParam:"style=form,explode=true,name=mu_date_range"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
	ServiceDate *string `queryParam:"style=form,explode=true,name=service_date"`
}

type ProceduresReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ProceduresReadRequest struct {
	PathParams  ProceduresReadPathParams
	QueryParams ProceduresReadQueryParams
	Security    ProceduresReadSecurity
}

type ProceduresReadResponse struct {
	BillingLineItem *shared.BillingLineItem
	ContentType     string
	StatusCode      int64
}
