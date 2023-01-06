package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPaymentLogListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office   *int64  `queryParam:"style=form,explode=true,name=office"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientPaymentLogListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientPaymentLogList200ApplicationJSON
// Paginated Result
type PatientPaymentLogList200ApplicationJSON struct {
	Data     []shared.CashPaymentLog `json:"data,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
}

type PatientPaymentLogListRequest struct {
	QueryParams PatientPaymentLogListQueryParams
	Security    PatientPaymentLogListSecurity
}

type PatientPaymentLogListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PatientPaymentLogList200ApplicationJSONObject *PatientPaymentLogList200ApplicationJSON
}
