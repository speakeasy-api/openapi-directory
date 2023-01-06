package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPaymentsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientPaymentsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientPaymentsList200ApplicationJSON
// Paginated Result
type PatientPaymentsList200ApplicationJSON struct {
	Data     []shared.CashPayment `json:"data,omitempty"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
}

type PatientPaymentsListRequest struct {
	QueryParams PatientPaymentsListQueryParams
	Security    PatientPaymentsListSecurity
}

type PatientPaymentsListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	PatientPaymentsList200ApplicationJSONObject *PatientPaymentsList200ApplicationJSON
}
