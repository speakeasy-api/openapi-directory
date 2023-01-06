package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPaymentsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientPaymentsReadQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientPaymentsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPaymentsReadRequest struct {
	PathParams  PatientPaymentsReadPathParams
	QueryParams PatientPaymentsReadQueryParams
	Security    PatientPaymentsReadSecurity
}

type PatientPaymentsReadResponse struct {
	CashPayment *shared.CashPayment
	ContentType string
	StatusCode  int64
}
