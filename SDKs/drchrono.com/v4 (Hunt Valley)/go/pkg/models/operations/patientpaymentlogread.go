package operations

import (
	"openapi/pkg/models/shared"
)

type PatientPaymentLogReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientPaymentLogReadQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office *int64  `queryParam:"style=form,explode=true,name=office"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientPaymentLogReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientPaymentLogReadRequest struct {
	PathParams  PatientPaymentLogReadPathParams
	QueryParams PatientPaymentLogReadQueryParams
	Security    PatientPaymentLogReadSecurity
}

type PatientPaymentLogReadResponse struct {
	CashPaymentLog *shared.CashPaymentLog
	ContentType    string
	StatusCode     int64
}
