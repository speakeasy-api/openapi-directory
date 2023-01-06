package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPaymentsCreateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientPaymentsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPaymentsCreateRequest struct {
	QueryParams PatientPaymentsCreateQueryParams
	Security    PatientPaymentsCreateSecurity
}

type PatientPaymentsCreateResponse struct {
	CashPayment *shared.CashPayment
	ContentType string
	StatusCode  int64
}
