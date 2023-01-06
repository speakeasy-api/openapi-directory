package operations

import (
	"openapi/pkg/models/shared"
)

type InsurancesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InsurancesReadQueryParams struct {
	PayerType string  `queryParam:"style=form,explode=true,name=payer_type"`
	Term      *string `queryParam:"style=form,explode=true,name=term"`
}

type InsurancesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type InsurancesReadRequest struct {
	PathParams  InsurancesReadPathParams
	QueryParams InsurancesReadQueryParams
	Security    InsurancesReadSecurity
}

type InsurancesReadResponse struct {
	ContentType string
	Insurance   *shared.Insurance
	StatusCode  int64
}
