package operations

import (
	"openapi/pkg/models/shared"
)

type InsurancesListQueryParams struct {
	Cursor    *string `queryParam:"style=form,explode=true,name=cursor"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=page_size"`
	PayerType string  `queryParam:"style=form,explode=true,name=payer_type"`
	Term      *string `queryParam:"style=form,explode=true,name=term"`
}

type InsurancesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// InsurancesList200ApplicationJSON
// Paginated Result
type InsurancesList200ApplicationJSON struct {
	Data     []shared.Insurance `json:"data,omitempty"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
}

type InsurancesListRequest struct {
	QueryParams InsurancesListQueryParams
	Security    InsurancesListSecurity
}

type InsurancesListResponse struct {
	ContentType                            string
	StatusCode                             int64
	InsurancesList200ApplicationJSONObject *InsurancesList200ApplicationJSON
}
