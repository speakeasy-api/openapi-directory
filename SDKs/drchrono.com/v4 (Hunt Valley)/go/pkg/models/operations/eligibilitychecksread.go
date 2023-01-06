package operations

import (
	"openapi/pkg/models/shared"
)

type EligibilityChecksReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EligibilityChecksReadQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	AppointmentDate      *string `queryParam:"style=form,explode=true,name=appointment_date"`
	AppointmentDateRange *string `queryParam:"style=form,explode=true,name=appointment_date_range"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient              *int64  `queryParam:"style=form,explode=true,name=patient"`
	QueryDate            *string `queryParam:"style=form,explode=true,name=query_date"`
	QueryDateRange       *string `queryParam:"style=form,explode=true,name=query_date_range"`
}

type EligibilityChecksReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type EligibilityChecksReadRequest struct {
	PathParams  EligibilityChecksReadPathParams
	QueryParams EligibilityChecksReadQueryParams
	Security    EligibilityChecksReadSecurity
}

type EligibilityChecksReadResponse struct {
	ContentType string
	Coverage    *shared.Coverage
	StatusCode  int64
}
